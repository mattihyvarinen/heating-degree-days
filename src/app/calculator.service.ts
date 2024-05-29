import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculatorService {

  constructor() { }
  
  calculateNormalizedConsumption(consumption: number) {
    return Math.round((34/56)*915.87);
}

}
