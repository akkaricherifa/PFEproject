import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  path="http://localhost:3000/formation";

  constructor(private http: HttpClient) { }
  
  createFormation(data:any) {
    return this.http.post(this.path+"/",data) 
  
  }
}
