import { TestBed } from '@angular/core/testing';

import { CardToTabCommunicatorService } from './card-to-tab-communicator.service';

describe('CardToTabCommunicatorService', () => {
  let service: CardToTabCommunicatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardToTabCommunicatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
