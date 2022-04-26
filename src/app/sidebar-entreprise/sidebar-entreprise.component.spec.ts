import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEntrepriseComponent } from './sidebar-entreprise.component';

describe('SidebarEntrepriseComponent', () => {
  let component: SidebarEntrepriseComponent;
  let fixture: ComponentFixture<SidebarEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
