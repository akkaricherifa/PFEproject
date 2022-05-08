import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteSuggestionComponent } from './boite-suggestion.component';

describe('BoiteSuggestionComponent', () => {
  let component: BoiteSuggestionComponent;
  let fixture: ComponentFixture<BoiteSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoiteSuggestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
