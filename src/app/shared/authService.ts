import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogin=false;
  roleAs:any;
  token:any;


  constructor(private router:Router) { }
  isAuthentificated() {
    const token= localStorage.getItem('token');
    if (token) this.isLogin= true 
    else 
    this.isLogin= false;
    return this.isLogin;
  }

  Login(value: string,token:any){
    this.isLogin=true;
    this.roleAs= value;
    localStorage.setItem('STATE','true');
    localStorage.setItem('token',token);
    localStorage.setItem('ROLE',this.roleAs);
    return of ({succes: this.isLogin, role: this.roleAs});
  }



logout() {
  this.isLogin= false;
  this.roleAs='';
  localStorage.removeItem('token');
  localStorage.removeItem('ROLE');
  localStorage.removeItem('admin');
  localStorage.removeItem('entreprise');
  localStorage.removeItem("STATE");
  localStorage.removeItem('CurrentUser');
        
  this.router.navigate(["/login"]);
  return of({ success: this.isLogin, role:""});

}
getRole() {
  this.roleAs= localStorage.getItem("ROLE");
  return this.roleAs;
}
}
