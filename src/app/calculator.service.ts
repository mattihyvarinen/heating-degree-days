import { Injectable } from '@angular/core';

type HeatingDegreeDayData = {
    [key: number]: number[]
  }


@Injectable({
    providedIn: 'root'
  })
  
export class CalculatorService {

  private monthly_data: HeatingDegreeDayData = {
    2021: [ 792, 836, 652, 432, 223, 0, 0, 44, 284, 340, 538, 830 ],
    2022: [ 779, 613, 612, 473, 219, 0, 5, 14, 257, 359, 553, 692 ],
    2023: [ 658, 651, 680, 420, 140, 56, 0, 0, 49, 478, 636, 797 ]
  };
  private reference_data = [793, 724, 651, 446, 206, 34, 10, 32, 188, 416, 557, 698];

  constructor() { }
  
  calculateNormalizedConsumption(consumption: number, date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const reference_hdd = this.reference_data[month];
    const monthly_hdd = this.monthly_data[year][month];

    return Math.round((reference_hdd/monthly_hdd)*consumption);
  };
}