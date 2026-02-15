import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-user-reactive-form',
  imports: [ReactiveFormsModule],
  templateUrl: './user-reactive-form.html',
  styleUrl: './user-reactive-form.css',
})
export class UserReactiveForm {
  userForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.pattern('(?=.*[A-Za-z])(?=.*\\d).+'),
    ]),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  errorMessages = {
    required: () => 'This is required',
    minlength: (e: { requiredLength: number }) => `Minimum ${e.requiredLength} characters required`,
    pattern: () => 'Must contain at least one letter and one number',
    email: () => 'Invalid email address',
  } as const;

  getErrorMessages(errors: ValidationErrors | null): string[] {
    if (!errors) {
      return [];
    }

    return Object.entries(errors).map(([key, value]) => {
      const messageFactory = this.errorMessages[key as keyof typeof this.errorMessages];
      if (!messageFactory) {
        return 'Invalid value';
      }

      return messageFactory(value as { requiredLength: number });
    });
  }

  userObj = {
    id: 0,
    name: '',
    username: '',
    email: '',
    password: '',
  };
}
