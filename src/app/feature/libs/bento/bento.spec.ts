import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bento } from './bento';

describe('Bento', () => {
  let component: Bento;
  let fixture: ComponentFixture<Bento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Bento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
