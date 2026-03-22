import { TestBed } from '@angular/core/testing';

import { Libs } from './libs';

describe('Libs', () => {
  let service: Libs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Libs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
