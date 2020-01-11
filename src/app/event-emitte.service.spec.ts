import { TestBed } from '@angular/core/testing';

import { EventEmitteService } from './event-emitte.service';

describe('EventEmitteService', () => {
  let service: EventEmitteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventEmitteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
