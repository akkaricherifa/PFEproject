import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSuppComponent } from './navbar-supp.component';

describe('NavbarSuppComponent', () => {
  let component: NavbarSuppComponent;
  let fixture: ComponentFixture<NavbarSuppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarSuppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarSuppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
