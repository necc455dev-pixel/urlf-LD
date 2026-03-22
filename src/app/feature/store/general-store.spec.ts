import { TestBed } from '@angular/core/testing';

import { GeneralStore } from './general-store';

describe('GeneralStore', () => {
  let service: GeneralStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
