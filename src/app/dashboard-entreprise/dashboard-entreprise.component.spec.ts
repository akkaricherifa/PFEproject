import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEntrepriseComponent } from './dashboard-entreprise.component';

describe('DashboardEntrepriseComponent', () => {
  let component: DashboardEntrepriseComponent;
  let fixture: ComponentFixture<DashboardEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
