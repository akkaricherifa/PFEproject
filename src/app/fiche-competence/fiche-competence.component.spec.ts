import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheCompetenceComponent } from './fiche-competence.component';

describe('FicheCompetenceComponent', () => {
  let component: FicheCompetenceComponent;
  let fixture: ComponentFixture<FicheCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FicheCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FicheCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
