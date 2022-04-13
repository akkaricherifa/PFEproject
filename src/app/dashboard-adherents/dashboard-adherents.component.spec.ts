import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardAdherentsComponent } from './dashboard-adherents.component';

describe('DashboardAdherentsComponent', () => {
  let component: DashboardAdherentsComponent;
  let fixture: ComponentFixture<DashboardAdherentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardAdherentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardAdherentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
