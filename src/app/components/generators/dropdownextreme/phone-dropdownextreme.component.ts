import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phone-dropdownextreme',
  templateUrl: './phone-dropdownextreme.component.html',
  //styleUrls: [ './phone-rng.component.css' ]
})
export class PhoneDropDownExtremeComponent implements OnInit {
  constructor() { }
  private digitsTripple: string[] = [];
  private digitsDouble: string[] = [];
  private prefix: string = "06";

  private phoneNumber: string;
  private digit1: string = "000";
  private digit2: string = "000";
  private digit3: string = "00";

  ngOnInit() {
    // Generate the digits
    for (let i = 0; i < 1000; i++) {
      if (i < 100) {
        this.digitsDouble.push(this.IntToString(i, 2));
      }
      this.digitsTripple.push(this.IntToString(i, 3));
    }
    // Call the build function
    this.buildPhoneNumber();
  }

  private IntToString(integer: number, length: number) {
    var str = integer.toString();
    while (str.length < length) {
      str = "0" + str;
    }
    return str;
  }

  private buildPhoneNumber() {
    this.phoneNumber = this.prefix;
    this.phoneNumber += this.digit1;
    this.phoneNumber += this.digit2;
    this.phoneNumber += this.digit3;
  }

  private numberSelected() {
    this.buildPhoneNumber();
  }
}
