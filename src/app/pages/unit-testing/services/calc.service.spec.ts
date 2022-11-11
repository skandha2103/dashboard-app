// import { TestBed } from '@angular/core/testing';

// import { CalcService } from './calc.service';

// describe('CalcService', () => {
//   let service: CalcService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CalcService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });


import { LogrService } from './logr.service';
import { CalcService } from './calc.service';

describe('CalculatorService', () => {
  let mockLoggerService: any;
  let calculator: CalcService;
  beforeEach(() => {
    console.log('calling before each');
    mockLoggerService = jasmine.createSpyObj('LogrService', ['log']);
    calculator = new CalcService(mockLoggerService);
  });

  it('should add two numbers', () => {
    console.log('calling add');
    let result = calculator.add(2, 2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    console.log('calling subtract');
    let result = calculator.subtract(2, 2);
    expect(result).toBe(0);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1);
  });
});