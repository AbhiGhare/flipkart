import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMenuListComponent } from './login-menu-list.component';

describe('LoginMenuListComponent', () => {
  let component: LoginMenuListComponent;
  let fixture: ComponentFixture<LoginMenuListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMenuListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMenuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
