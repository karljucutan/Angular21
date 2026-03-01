import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { email, form, FormField, minLength, required } from '@angular/forms/signals';

@Component({
  selector: 'app-signal-form-ex',
  imports: [FormField, JsonPipe],
  templateUrl: './signal-form-ex.html',
  styleUrl: './signal-form-ex.css',
})
export class SignalFormEx {
  // Signal model = source of truth for data values.
  // Use this for payloads (POST/PUT), persistence, and non-validation UI display.
  loginModel = signal({ email: '', password: '' });

  // Signal form = form behavior/state over the model.
  // Use this for field binding, validation, touched/invalid/errors, and submit guarding.
  loginForm = form(this.loginModel, schema => {
    required(schema.email, {message: 'Email is required'});
    email(schema.email, {message: 'Invalid email format'});

    required(schema.password, {message: 'Password is required'});
    minLength(schema.password, 6, {message: 'Password must be at least 6 characters'});
  });

  submittedPayload = signal<{ email: string; password: string } | null>(null);

  onSubmit(event: Event): void {
    event.preventDefault();

    // using the signal form's invalid state to guard submission, instead of checking the model's values or errors.
    if (this.loginForm().invalid()) {
      return;
    }

    // sample, using the signal model as the source of truth for the payload.
    const payload = this.loginModel();
    this.submittedPayload.set(payload);
  }
}
