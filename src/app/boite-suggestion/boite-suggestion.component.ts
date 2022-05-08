import { Component, OnInit } from '@angular/core';
import { SuggestionService } from '../shared/suggestion.service';

@Component({
  selector: 'app-boite-suggestion',
  templateUrl: './boite-suggestion.component.html',
  styleUrls: ['./boite-suggestion.component.css']
})
export class BoiteSuggestionComponent implements OnInit {
  suggestions:any;
  p : number=1;
  constructor( private suggestionServ : SuggestionService) { }

  ngOnInit() {
    this.refreshData();
  }

  refreshData(){
    this.suggestionServ.getAllSuggestion()
    .subscribe(
      response => {
        this.suggestions = response; }
     );
  }
}
