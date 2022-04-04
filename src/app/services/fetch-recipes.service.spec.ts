import { TestBed } from '@angular/core/testing';

import { FetchRecipesService } from './fetch-recipes.service';

describe('FetchRecipesService', () => {
  let service: FetchRecipesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchRecipesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
