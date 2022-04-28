import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormationAdherentComponent } from './formation-adherent.component';

describe('FormationAdherentComponent', () => {
  let component: FormationAdherentComponent;
  let fixture: ComponentFixture<FormationAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormationAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormationAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
