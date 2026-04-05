import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { EnrollementButtonBiaGoogleForm } from './enrollement-button-bia-google-form';

describe('EnrollementButtonBiaGoogleForm', () => {
  let component: EnrollementButtonBiaGoogleForm;
  let fixture: ComponentFixture<EnrollementButtonBiaGoogleForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnrollementButtonBiaGoogleForm],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(EnrollementButtonBiaGoogleForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
