import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'phone-timer',
  templateUrl: './phone-timer.component.html'
})
export class PhoneTimerComponent implements OnInit {
  constructor() { }
  private prefix: string = "06"
  private nextNumber: number = 0;
  private phoneNumber: string;
  private timer: any;
  private isRunning: boolean = true;

  ngOnInit() {
    // Call the build function
	  this.resetPhoneNumber();	
  }

  private resetPhoneNumber() {
	  this.phoneNumber = this.prefix;
	  if (this.timer) {
		clearTimeout(this.timer);
	  }
	  this.nextNumber = 0;
	  this.setTimer();
  }
  
  private setTimer() {
    var self = this;
    self.timer = setTimeout(function(){
      self.nextNumber++;
      if (self.nextNumber > 9) {
        self.nextNumber = 0;
      }
      self.setTimer();
      self.isRunning = true;
    }, 200);
  }

  private clickReset() {
	  this.resetPhoneNumber();
  }

  private clickSet() {
    this.phoneNumber+= this.nextNumber;
    if (this.phoneNumber.length >= 10) {
      if (this.timer) {
        clearTimeout(this.timer);
        this.isRunning = false;
      }
    }
  }
}
