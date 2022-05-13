import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { AuthService } from '../shared/authService';
import { EntrepriseService } from '../shared/entreprise.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  token:any;
  
  loginResponse = '';
  
  public showPassword!: boolean;
  public showPasswordOnPress!: boolean;
  constructor(private router:Router, 
    private fb: FormBuilder,
    private adminServ: AdminService,
    private authServ: AuthService,
    private entrepriseServ:EntrepriseService,
    private toastr: ToastrService,) { 
// this.loginForm = this.fb.group({
//         email: [
//           "",
//           Validators.compose([
//             Validators.pattern(
//               "^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$"
//             ),
//             Validators.required,
//           ]),
//         ],
//         password: ["", Validators.required],
       
//       });
let formControls = {
  email: new FormControl('', [
    Validators.required,
    Validators.email,
    Validators.pattern(
                  "^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$"
                ),
  ]),
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(2)
  ])
}

this.loginForm = this.fb.group(formControls)
}

get email() { return this.loginForm.get('email') }
get password() { return this.loginForm.get('password') }
  

  ngOnInit(): void {
   

  }
  test(){
    console.log(this.loginForm.value);
  
    
  }
login() {
  this.adminServ.login(this.loginForm.value).subscribe((res:any)=> {
    console.log("hello",res);
    if(res.admin.role=="entreprise"){
      this.authServ.Login(res.admin,res.token);
    localStorage.setItem('CurrentUser', res.admin._id)
    this.router.navigate(["/dashboard-entreprise"]);

    }
    
    //////admin
    if (res.admin.role=="Admin"){
    this.router.navigate(["/dashboard-admin"]);

    this.authServ.Login(res.admin.role,res.token);
    localStorage.setItem('CurrentUser', res.admin._id)}
    /////adherent
    else if (res.admin.role=="Adherent"){
    this.router.navigate(["/dashboard-adherents"]);

    this.authServ.Login(res.admin.role,res.token);
    localStorage.setItem('CurrentUser', res.admin._id)}
     
   ////// RH
    else if (res.admin.role=="RH"){
    this.router.navigate(["/espace-rh"]);

    this.authServ.Login(res.admin.role,res.token);
    localStorage.setItem('CurrentUser', res.admin._id)}
    else { this.router.navigate(["/dashboard-entreprise"]);
    this.authServ.Login(res.admin,res.token);
    localStorage.setItem('CurrentUser', res.admin._id)}
    
    //if (res.admin.role=="RH")
    //this.router.navigate(["/acceuil"]);

    //this.authServ.Login(res.admin.role,res.token);
    //localStorage.setItem('CurrentUser', res.admin._id)
  }, err=> {
    console.log("Invalid password or Email");
    this.loginResponse="*Invalid Password or Email";
  })
  
}

}