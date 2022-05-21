import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCompComponent } from './ajout-comp.component';

describe('AjoutCompComponent', () => {
  let component: AjoutCompComponent;
  let fixture: ComponentFixture<AjoutCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
