import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Prose } from './prose';

describe('Prose', () => {
  let component: Prose;
  let fixture: ComponentFixture<Prose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Prose]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Prose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
