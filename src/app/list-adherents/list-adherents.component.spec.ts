import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdherentsComponent } from './list-adherents.component';

describe('ListAdherentsComponent', () => {
  let component: ListAdherentsComponent;
  let fixture: ComponentFixture<ListAdherentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdherentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdherentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
