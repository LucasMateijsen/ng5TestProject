import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phone-dropdown',
  templateUrl: './phone-dropdown.component.html',
  //styleUrls: [ './phone-rng.component.css' ]
})
export class PhoneDropDownComponent implements OnInit {
  constructor() { }
  private digits: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  private prefix: string = "06";

  private phoneNumber: string;
  private digit1: number = 0;
  private digit2: number = 0;
  private digit3: number = 0;
  private digit4: number = 0;
  private digit5: number = 0;
  private digit6: number = 0;
  private digit7: number = 0;
  private digit8: number = 0;

  ngOnInit() {
    // Call the build function
    this.buildPhoneNumber();
  }

  private buildPhoneNumber() {
    this.phoneNumber = this.prefix;
    this.phoneNumber += this.digit1.toString();
    this.phoneNumber += this.digit2.toString();
    this.phoneNumber += this.digit3.toString();
    this.phoneNumber += this.digit4.toString();
    this.phoneNumber += this.digit5.toString();
    this.phoneNumber += this.digit6.toString();
    this.phoneNumber += this.digit7.toString();
    this.phoneNumber += this.digit8.toString();
  }

  private numberSelected() {
    this.buildPhoneNumber();
  }
}
