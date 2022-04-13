import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubliclayoutComponent } from './publiclayout.component';

describe('PubliclayoutComponent', () => {
  let component: PubliclayoutComponent;
  let fixture: ComponentFixture<PubliclayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PubliclayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PubliclayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
