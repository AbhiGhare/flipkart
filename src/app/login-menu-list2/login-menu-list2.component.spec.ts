import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMenuList2Component } from './login-menu-list2.component';

describe('LoginMenuList2Component', () => {
  let component: LoginMenuList2Component;
  let fixture: ComponentFixture<LoginMenuList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMenuList2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginMenuList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
