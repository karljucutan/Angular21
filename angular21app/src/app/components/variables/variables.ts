import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  imports: [],
  templateUrl: './variables.html',
  styleUrl: './variables.css',
})
export class Variables {

  courseName : string = 'Angular 21';
  currentVersion : number = 21;

  rollNo: number = 121;
  productPrice = 1200.50;

  isActive: boolean = true;
  isPresent = true;

  currentDate: Date = new Date();

  cityList: string[] = ['Manila', 'San Pedro', 'Sta Rosa'];

  rollNoArray: number[] = [121, 122, 123];

  studentObj = {
    name: 'John Doe',
    mobile: '1234567890',
    email: 'johndoe@example.com'
  }

  studentList = [
    {name: 'ABC', city : 'Manila'},
    {name: 'DEF', city : 'San Pedro'},
    {name: 'GHI', city : 'Sta Rosa'}
  ]

  constructor() {

  }
}
