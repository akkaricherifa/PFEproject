import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCompetenceComponent } from './all-competence.component';

describe('AllCompetenceComponent', () => {
  let component: AllCompetenceComponent;
  let fixture: ComponentFixture<AllCompetenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllCompetenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllCompetenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
