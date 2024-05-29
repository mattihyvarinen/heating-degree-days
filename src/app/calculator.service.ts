import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CalculatorService {

  private reference_data: number[] = [793, 724, 651, 446, 206, 34, 10, 32, 188, 416, 557, 698];
  private heating_degree_days_data: number[] = [658, 651, 680, 420, 140, 56, 0, 0, 49, 478, 636, 797];

  constructor() { }
  
  calculateNormalizedConsumption(consumption: number, date: Date) {
    const reference_heating_degree_days = this.reference_data[date.getMonth()];
    const real_heating_degree_days = this.heating_degree_days_data[date.getMonth()];
    return Math.round((reference_heating_degree_days/real_heating_degree_days)*consumption);
}

}
