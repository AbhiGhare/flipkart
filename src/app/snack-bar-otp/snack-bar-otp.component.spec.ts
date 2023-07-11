import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackBarOtpComponent } from './snack-bar-otp.component';

describe('SnackBarOtpComponent', () => {
  let component: SnackBarOtpComponent;
  let fixture: ComponentFixture<SnackBarOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SnackBarOtpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SnackBarOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
