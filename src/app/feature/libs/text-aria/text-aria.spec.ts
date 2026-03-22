import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAria } from './text-aria';

describe('TextAria', () => {
  let component: TextAria;
  let fixture: ComponentFixture<TextAria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextAria);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
