import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAdhComponent } from './update-adh.component';

describe('UpdateAdhComponent', () => {
  let component: UpdateAdhComponent;
  let fixture: ComponentFixture<UpdateAdhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAdhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAdhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
