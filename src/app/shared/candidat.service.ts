 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidat } from '../Model/candidat';
@Injectable({
  providedIn: 'root'
})
export class CandidatService {
  path="http://localhost:3000/candidat";
  
constructor(private http: HttpClient) { }
createCandidat(data:any,) {
//  const data:FormData= new FormData();
//     data.append('candidate',JSON.stringify(candidate));
//     data.append('cv_file',fileCV);
//     data.append('motiv_letter_file',fileLettre);
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
getFile(){
  return this.http.get("/getFile",{responseType:'blob'});
}
}
