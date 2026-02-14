import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dynamic-css-class',
  imports: [FormsModule],
  templateUrl: './dynamic-css-class.html',
  styleUrl: './dynamic-css-class.css',
})
export class DynamicCssClass {
  myClassName: string = 'bg-warning';

  isActive: boolean = false;

  productPrice: number = 100;

  divBackColor: string = '';

  getProductPriceClass() {
    if (this.productPrice > 100) {
      return 'text-success';
    } else if (this.productPrice > 10 && this.productPrice <= 100) {
      return 'text-warning';
    } else {
      return 'text-danger';
    }
  }
}
