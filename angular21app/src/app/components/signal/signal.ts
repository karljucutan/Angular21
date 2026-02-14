import { Component, signal } from '@angular/core';

export interface UIState {
  text: string;
  value: number;
}

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  // normal variable
  // courseName: string = "Angular Signals";

  courseName = signal("Angular Signals");
  uiState = signal<UIState>({ text: 'Initial text', value: 0 });
  constructor() {
    console.log('Before: ' + this.courseName());

    setTimeout(() => {
      // normal variable
      // this.courseName = "Change Course";

      this.courseName.set("Change Course");
      // update uiState along with courseName to demonstrate usage
      this.uiState.update(s => ({ ...s, text: 'Updated text from ctor', value: s.value + 1 }));
      console.log('After: ' + this.courseName());
      console.log('uiState after:', this.uiState());
    }, 3000);
  }
}
