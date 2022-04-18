import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseAreaComponent } from './entreprise-area.component';

describe('EntrepriseAreaComponent', () => {
  let component: EntrepriseAreaComponent;
  let fixture: ComponentFixture<EntrepriseAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
