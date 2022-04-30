import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeMembreProfComponent } from './liste-membre-prof.component';

describe('ListeMembreProfComponent', () => {
  let component: ListeMembreProfComponent;
  let fixture: ComponentFixture<ListeMembreProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeMembreProfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeMembreProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
