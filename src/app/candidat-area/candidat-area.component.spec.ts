import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatAreaComponent } from './candidat-area.component';

describe('CandidatAreaComponent', () => {
  let component: CandidatAreaComponent;
  let fixture: ComponentFixture<CandidatAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
