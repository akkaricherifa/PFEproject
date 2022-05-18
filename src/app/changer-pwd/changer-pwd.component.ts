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
  // password: String;
  // email : String ;
  newPassword: any;
  oldPassword:any;


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
  //  updatePassword(){
  //   this.adhServ.updatePassword(this.email,this.oldPassword,this.newPassword).subscribe( 
  //      data => {
  //     this.adhServ.toastMessage('Password changed successfully');
  //   }
  //   ,(error)=>{
  //     this.adhServ.toastMessage('Failed action')
  //    } ); 
    
  //   }

 logout(){
   this.authServ.logout()
 }
 

 onUpload(event:any){
  let file: File
  let fd = new FormData()
  file = <File> event.target.files[0];
  fd.append('file', file, file.name)
  this.adhServ.uploadFile(fd).subscribe((res: any) => {
    console.log(res);
    
    }, (err)=>{
      console.log(err);
      
    })
  
    }
  
 }
 