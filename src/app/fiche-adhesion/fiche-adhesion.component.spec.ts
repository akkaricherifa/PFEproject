import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheAdhesionComponent } from './fiche-adhesion.component';

describe('FicheAdhesionComponent', () => {
  let component: FicheAdhesionComponent;
  let fixture: ComponentFixture<FicheAdhesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheAdhesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheAdhesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
