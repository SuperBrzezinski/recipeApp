import { TestBed } from '@angular/core/testing';

import { CardToTabService } from './card-to-tab.service';

describe('CardToTabService', () => {
  let service: CardToTabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardToTabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
