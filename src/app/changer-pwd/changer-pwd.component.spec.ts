import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangerPwdComponent } from './changer-pwd.component';

describe('ChangerPwdComponent', () => {
  let component: ChangerPwdComponent;
  let fixture: ComponentFixture<ChangerPwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangerPwdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangerPwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
