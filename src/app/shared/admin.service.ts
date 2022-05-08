import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Adhérent } from '../Model/adhérent';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  path="http://localhost:3000/admin";
  private _snackbar: any;

  constructor(private http: HttpClient) { }
  login(data:any){
    return this.http.post(this.path+"/login",data)
  }

  sendMail(data:any) {
    return this.http.post(this.path+"/mail",data) 
  
  }
  sendDenyMail(data:any) {
    return this.http.post(this.path+"/denymail",data) 
  
  }
  updateAdherent(id:number,adherent: Adhérent){
    return this.http.put("http://localhost:3000/adherent"+id,adherent);
  }
}
