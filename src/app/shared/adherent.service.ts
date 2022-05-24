import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Adhérent } from '../Model/adhérent';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class AdherentService {

  path="http://localhost:3000/adherent";
  private _snackbar: any;

  constructor(private http: HttpClient) { }
  login(data:any){
    return this.http.post(this.path+"/login",data)
  }

  createAdherent(data:any) {
    return this.http.post(this.path+"/",data) 
  
  }
  deleteAdherent(id:any) {
    return this.http.delete(this.path+"/"+ id);
  }

  updateAdherent(id:number,adherent: Adhérent){
    return this.http.put(this.path+"/"+id,adherent);
  }
  getAllAdherent(){
    return this.http.get(this.path+"/");
  }
  getAdherent(id: number) {
    return this.http.get(this.path+"/"+ id);
  }

  getAdherentByFormation(id:number){
return this.http.get(this.path+"/get/"+id);
  }

  generateReport(id: number){
    return this.http.get(this.path+"/"+ id);
  }


  get(){
    return this.http.get("http://localhost:3000/competence");
  }
 
  participer(ida:any,data:any) {
    return this.http.post(this.path+"/a/"+ida,data) 
  
  }
  uploadFile(data:any) {
    return this.http.post(this.path+"/upload",data) 
   
   }

   ajoutCompetence2(id:number,data:any){
     return this.http.post(this.path+"/ajout/"+id,data)
   }


   ajoutCompetenceByUser(data:any){
    return this.http.post(this.path+"/ajouter",data)
  }
  getCompetenceById(id: number){
    return this.http.get(this.path+"/comp/"+ id);
  }

   
}



