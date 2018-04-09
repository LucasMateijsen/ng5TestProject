import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phone-checkbox',
  templateUrl: './phone-checkbox.component.html',
  //styleUrls: [ './phone-rng.component.css' ]
})
export class PhoneCheckboxComponent implements OnInit {
  constructor() { }
  private prefix: string = "06"
  private phoneNumber: string;
  private selectedNumber: number = 0;

  ngOnInit() {
    // Call the build function
    this.buildPhoneNumber();
  }

  private buildPhoneNumber() {
    this.phoneNumber = `${this.prefix}`;
    let numberAsString = this.selectedNumber.toString();
    for (let i = numberAsString.length; i < 8; i++) {
      this.phoneNumber+= "0";
    }
    this.phoneNumber+= numberAsString;
  }
}
