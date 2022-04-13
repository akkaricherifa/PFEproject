import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceRHComponent } from './espace-rh.component';

describe('EspaceRHComponent', () => {
  let component: EspaceRHComponent;
  let fixture: ComponentFixture<EspaceRHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EspaceRHComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EspaceRHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
