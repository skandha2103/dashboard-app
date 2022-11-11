// import { TestBed } from '@angular/core/testing';

// import { LogrService } from './logr.service';

// describe('LogrService', () => {
//   let service: LogrService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(LogrService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

import { LogrService } from './logr.service';

describe('LoggerService', () => {
  let service: LogrService;

  beforeEach(() => {
    service = new LogrService();
  });

  it('should not have any messages at starting', () => {
    //arrange
    //const service = new LoggerService();

    //act
    let count = service.messages.length;

    //assert
    expect(count).toBe(0);
  });

  it('should add the message when log is called', () => {
    //arrange
    //const service = new LoggerService();

    //act
    service.log('message');

    //assert
    expect(service.messages.length).toBe(1);
  });

  it('should clear all the messages when clear is called', () => {
    //arrange
    //const service = new LoggerService();
    service.log('message');

    //act
    service.clear();

    //assert
    expect(service.messages.length).toBe(0);
  });
});
