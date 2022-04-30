import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CompetenceService {
  path="http://localhost:3000/competence";

  constructor( private http: HttpClient) {}

  createCompetence(data:any) {
    return this.http.post(this.path+"/",data) 
  
  }

  getAllCompetence(){
    return this.http.get(this.path+"/");
  }

  getCompetence(id: number) {
    return this.http.get(this.path+"/"+ id);
  }
}
