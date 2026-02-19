import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Master {
  // store data
  // create api call function
  // utility func helper
  addTwoNum(a: number, b: number): number {
    return a + b;
  }
}
