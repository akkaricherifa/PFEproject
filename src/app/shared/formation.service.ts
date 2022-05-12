import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Formation } from '../Model/formation';
@Injectable({
  providedIn: 'root'
})
export class FormationService {
  path="http://localhost:3000/formation";

  constructor(private http: HttpClient) { }
  
  createFormation(data:any) {
    return this.http.post(this.path+"/",data) 
  }

  getAllFormation(){
    return this.http.get(this.path+"/");
  }

  deleteFormation(id:any) {
    return this.http.delete(this.path+"/"+ id);
  }
  
  getFormation(id: number) {
    return this.http.get(this.path+"/"+ id);
  }

  updateFormation(id:number,formation: Formation){
    return this.http.put(this.path+"/"+id,formation);
  }
}
