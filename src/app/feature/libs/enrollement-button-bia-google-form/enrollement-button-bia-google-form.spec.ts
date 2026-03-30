import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnrollementButtonBiaGoogleForm } from './enrollement-button-bia-google-form';

describe('EnrollementButtonBiaGoogleForm', () => {
  let component: EnrollementButtonBiaGoogleForm;
  let fixture: ComponentFixture<EnrollementButtonBiaGoogleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollementButtonBiaGoogleForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnrollementButtonBiaGoogleForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
