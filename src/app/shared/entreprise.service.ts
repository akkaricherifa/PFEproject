import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  path="http://localhost:3000/entreprise";


  constructor(private http: HttpClient) { }
  
  createEntreprise(data:any) {
    return this.http.post(this.path+"/",data) 
  
  }
  
  getEntreprise(id: number) {
    return this.http.get(this.path+"/"+ id);
  }
  getAllEntreprise() {
    return this.http.get(this.path+"/") 
  
  }
  login(data:any){
    return this.http.post(this.path+"/login",data)
  }
  

}
