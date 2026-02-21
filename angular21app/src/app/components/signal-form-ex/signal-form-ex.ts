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
  loginModel = signal({ email: '', password: '' });
  // loginForm = form(this.loginModel);

    // single form instance with validators
  loginForm = form(this.loginModel, schema => {
    required(schema.email, {message: 'Email is required'});
    email(schema.email, {message: 'Invalid email format'});

    required(schema.password, {message: 'Password is required'});
    minLength(schema.password, 6, {message: 'Password must be at least 6 characters'});  });
}
