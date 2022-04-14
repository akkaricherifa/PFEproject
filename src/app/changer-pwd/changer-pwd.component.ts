import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Adhérent } from '../Model/adhérent';
import { AdherentService } from '../shared/adherent.service';
import { AdminService } from '../shared/admin.service';
import { AuthService } from '../shared/authService';
@Component({
  selector: 'app-changer-pwd',
  templateUrl: './changer-pwd.component.html',
  styleUrls: ['./changer-pwd.component.css']
})
export class ChangerPwdComponent implements OnInit {
  adherent!: Adhérent;
  Adherent!: any;
  id:any;
   constructor(private router:Router, 
     private fb: FormBuilder,
     private adminServ: AdminService,
     private authServ: AuthService,
     private adhServ: AdherentService) { }
 
   ngOnInit(): void {
     this. id =(localStorage.getItem('CurrentUser') || '');
     this.adhServ.getAdherent(this.id).subscribe( data => {
       console.log(data);
       this.Adherent = data;
     })
   }
 logout(){
   this.authServ.logout()
 }
 
 }
 