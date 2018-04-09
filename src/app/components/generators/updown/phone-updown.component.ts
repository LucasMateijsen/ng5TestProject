import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phone-updown',
  templateUrl: './phone-updown.component.html',
  //styleUrls: [ './phone-rng.component.css' ]
})
export class PhoneUpDownComponent implements OnInit {
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

  private clickIncrease() {
    if (this.selectedNumber < 99999999) {      
      this.selectedNumber++;
      this.buildPhoneNumber();
    }
  }

  private clickDecrease() {
    if (this.selectedNumber > 0) {      
      this.selectedNumber--;
      this.buildPhoneNumber();
    }
  }
}
