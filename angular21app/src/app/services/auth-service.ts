import { computed, Injectable, signal } from '@angular/core';

export interface AuthUser {
  userId: number;
  emailId: string;
  fullName: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly userState = signal<AuthUser | null>(null);
  private readonly tokenState = signal<string | null>(null);

  readonly user = this.userState.asReadonly();
  readonly token = this.tokenState.asReadonly();
  readonly isAuthenticated = computed(() => this.tokenState() !== null);

  setSession(user: AuthUser, token: string | null): void {
    this.userState.set(user);
    this.tokenState.set(token);
  }

  clearSession(): void {
    this.userState.set(null);
    this.tokenState.set(null);
  }
}
