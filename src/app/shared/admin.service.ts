import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
}
