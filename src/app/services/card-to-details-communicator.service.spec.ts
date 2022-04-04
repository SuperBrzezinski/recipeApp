import { TestBed } from '@angular/core/testing';

import { CardToDetailsCommunicatorService } from './card-to-details-communicator.service';

describe('CardToDetailsCommunicatorService', () => {
  let service: CardToDetailsCommunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardToDetailsCommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
