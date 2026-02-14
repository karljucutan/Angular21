import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.css',
})
export class DataBinding {
  courseName = "Angular 21";
  className = "primary";

  inputType = "date";

  showWelcomeMessage() {
    alert("Welcome to Angular 21!");
  }
}
