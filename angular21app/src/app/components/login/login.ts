import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { AuthService, AuthUser } from '../../services/auth-service';

// Creds
// {
//   "userId": 0,
//   "emailId": "kaiangular21@test.com",
//   "fullName": "kaiangular21",
//   "password": "kaiangular21"
// }

interface LoginRequest {
  emailId: string;
  password: string;
}

interface LoginApiResponse {
  result?: boolean;
  isSuccess?: boolean;
  message?: string;
  data?: any;
  token?: string;
}

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login {
  private readonly loginApiUrl = 'https://api.freeprojectapi.com/api/UserApp/login';

  private readonly formBuilder = inject(NonNullableFormBuilder);
  private readonly router = inject(Router);
  private readonly http = inject(HttpClient);
  private readonly authService = inject(AuthService);

  readonly loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    rememberMe: [false],
  });

  readonly showPassword = signal(false);
  readonly submitted = signal(false);
  readonly isLoading = signal(false);
  readonly errorMessage = signal('');

  isEmailInvalid(): boolean {
    const control = this.loginForm.controls.email;
    return control.invalid && (control.touched || control.dirty);
  }

  isPasswordInvalid(): boolean {
    const control = this.loginForm.controls.password;
    return control.invalid && (control.touched || control.dirty);
  }

  togglePasswordVisibility(): void {
    this.showPassword.update((value) => !value);
  }

  onSubmit(): void {
    this.submitted.set(false);
    this.errorMessage.set('');
    this.loginForm.markAllAsTouched();

    if (this.loginForm.invalid) {
      return;
    }

    this.isLoading.set(true);

    const payload: LoginRequest = {
      emailId: this.loginForm.controls.email.value,
      password: this.loginForm.controls.password.value,
    };

    this.http
      .post<LoginApiResponse>(this.loginApiUrl, payload)
      .pipe(finalize(() => this.isLoading.set(false)))
      .subscribe({
        next: response => {
          const loginSuccess = response.result === true || response.data != null;

          if (!loginSuccess) {
            this.errorMessage.set(response.message ?? 'Login failed. Please verify your credentials.');
            return;
          }

          const userData = response.data as Partial<AuthUser> | undefined;
          const sessionUser: AuthUser = {
            userId: userData?.userId ?? 0,
            emailId: userData?.emailId ?? this.loginForm.controls.email.value,
            fullName: userData?.fullName ?? this.loginForm.controls.email.value,
          };

          this.authService.setSession(sessionUser, response.data?.token ?? null);

          this.submitted.set(true);
          this.router.navigateByUrl('/');
        },
        error: () => {
          this.errorMessage.set('Unable to login right now. Please try again.');
        },
      });
  }
}
