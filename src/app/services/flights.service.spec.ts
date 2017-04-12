/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { FlightsService } from './flights.service';

describe('FlightsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightsService]
    });
  });

  it('should ...', inject([FlightsService], (service: FlightsService) => {
    expect(service).toBeTruthy();
  }));
});
