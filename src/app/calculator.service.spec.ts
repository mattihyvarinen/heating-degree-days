import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate normalized consumption', () => {
    const date = new Date(2023, 11);
    const consumption = 2022.54;
    const expected = 1771;
    
    const normalized_consumption = new CalculatorService().calculateNormalizedConsumption(consumption, date);
    
    expect(expected).toEqual(normalized_consumption);
  });
});
