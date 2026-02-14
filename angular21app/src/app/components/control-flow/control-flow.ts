import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.html',
  styleUrl: './control-flow.css',
})
export class ControlFlow {
  isOfferCodeValid: boolean = false; // normal variable

  isSuccessDivVisible: WritableSignal<boolean> = signal<boolean>(false); // signal

  studentTotalMark: number = 0;

  offerList: string[] = ['OFFER10', 'OFFER20', 'OFFER30'];

  validateOfferCode(offerCode: string) {
    this.isOfferCodeValid = this.offerList.includes(offerCode);
  }

  toggleDivVisibility() {
    this.isSuccessDivVisible.update(visible => !visible); // signal update
  }
}
