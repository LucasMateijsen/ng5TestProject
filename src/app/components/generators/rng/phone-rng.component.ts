import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phone-rng',
  templateUrl: './phone-rng.component.html',
  //styleUrls: [ './phone-rng.component.css' ]
})
export class PhoneRngComponent implements OnInit {
  constructor() { }
  private generatedNumber: string;
  private phoneNumberCorrect: boolean = false;

  ngOnInit() {
    // Call the random function once
    this.randomize();
  }

  private randomize() {
      this.generatedNumber = `06${Math.random().toString().substring(2, 10)}`;
  }

  private clickedNo() {
      this.randomize();
      this.phoneNumberCorrect = false;
  }

  private clickedYes() {
      this.phoneNumberCorrect = true;
  }
}
