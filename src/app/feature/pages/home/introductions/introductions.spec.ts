import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Introductions } from './introductions';

describe('Introductions', () => {
  let component: Introductions;
  let fixture: ComponentFixture<Introductions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Introductions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Introductions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
