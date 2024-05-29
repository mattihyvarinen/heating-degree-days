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
    const consumption = 915.87;
    const expected = 556;
    
    const normalized_consumption = new CalculatorService().calculateNormalizedConsumption(consumption)
    
    expect(expected).toEqual(normalized_consumption);
  });
});
