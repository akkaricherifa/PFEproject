import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilAdherentComponent } from './profil-adherent.component';

describe('ProfilAdherentComponent', () => {
  let component: ProfilAdherentComponent;
  let fixture: ComponentFixture<ProfilAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfilAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
