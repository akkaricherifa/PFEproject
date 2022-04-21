import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdherentArchivesComponent } from './adherent-archives.component';

describe('AdherentArchivesComponent', () => {
  let component: AdherentArchivesComponent;
  let fixture: ComponentFixture<AdherentArchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdherentArchivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdherentArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
