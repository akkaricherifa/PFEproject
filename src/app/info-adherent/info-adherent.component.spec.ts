import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAdherentComponent } from './info-adherent.component';

describe('InfoAdherentComponent', () => {
  let component: InfoAdherentComponent;
  let fixture: ComponentFixture<InfoAdherentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAdherentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAdherentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
