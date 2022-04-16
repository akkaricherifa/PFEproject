 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../Model/candidat';
@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  path="http://localhost:3000/candidat";
  
constructor(private http: HttpClient) { }
createCandidat(data:any) {
  return this.http.post(this.path+"/",data) 

}

deleteCandidat(id:any) {
  return this.http.delete(this.path+"/"+ id);
}
getCandidat(id: number) {
  return this.http.get(this.path+"/"+ id);
}
getAllCandidat(){
  return this.http.get(this.path+"/");
}
}
