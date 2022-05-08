import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEntrepriseComponent } from './liste-entreprise.component';

describe('ListeEntrepriseComponent', () => {
  let component: ListeEntrepriseComponent;
  let fixture: ComponentFixture<ListeEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeEntrepriseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
