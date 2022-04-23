import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { AuthService } from '../shared/authService';
import { EntrepriseService } from '../shared/entreprise.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  token:any;
  z!:boolean;
  

  constructor(private router:Router, 
    private fb: FormBuilder,
    private adminServ: AdminService,
    private authServ: AuthService,
    private entrepriseServ:EntrepriseService) { 
this.loginForm = this.fb.group({
        email: [
          "",
          Validators.compose([
            Validators.pattern(
              "^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$"
            ),
            Validators.required,
          ]),
        ],
        password: ["", Validators.required],
       
      });
  }

  ngOnInit(): void {
    this.z=true;

  }
  test(){
    console.log(this.loginForm.value);
  
    
  }
login() {
  this.adminServ.login(this.loginForm.value).subscribe((res:any)=> {
    console.log("hello",res);
  
    console.log(res.admin.role);
    //////admin
    if (res.admin.role=="Admin")
    this.router.navigate(["/dashboard-admin"]);

    this.authServ.Login(res.admin.role,res.token);
    localStorage.setItem('CurrentUser', res.admin._id)
    /////adherent
    if (res.admin.role=="Adherent")
    this.router.navigate(["/dashboard-adherents"]);

    this.authServ.Login(res.admin.role,res.token);
    localStorage.setItem('CurrentUser', res.admin._id)
   ////// RH
    if (res.admin.role=="RH")
    this.router.navigate(["/espace-rh"]);

    this.authServ.Login(res.admin.role,res.token);
    localStorage.setItem('CurrentUser', res.admin._id)
    
    //if (res.admin.role=="RH")
    //this.router.navigate(["/acceuil"]);

    //this.authServ.Login(res.admin.role,res.token);
    //localStorage.setItem('CurrentUser', res.admin._id)
  }, err=> {
    console.log("Invalid password or Email");
    this.z=false;
  })
  
}
}