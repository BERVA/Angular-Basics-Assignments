import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactive: number = 0;
  inactiveToActive: number = 0;

  constructor() { }

  incrementActiveToInactive(){
    this.activeToInactive++;
    console.log("Active To Inactive " +  this.activeToInactive);
  }
  incrementInactiveToInactive(){
    this.inactiveToActive++;
    console.log("Inactive to Active " + this.inactiveToActive);
  }
}
