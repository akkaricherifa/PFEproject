import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReponseCandidatComponent } from './reponse-candidat.component';

describe('ReponseCandidatComponent', () => {
  let component: ReponseCandidatComponent;
  let fixture: ComponentFixture<ReponseCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReponseCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReponseCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
