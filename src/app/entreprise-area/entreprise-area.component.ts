import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entreprise-area',
  templateUrl: './entreprise-area.component.html',
  styleUrls: ['./entreprise-area.component.css']
})
export class EntrepriseAreaComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor() { }

  ngOnInit(): void {
  }

}
