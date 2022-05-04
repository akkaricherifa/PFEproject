import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdherentService } from '../shared/adherent.service';
import { AdminService } from '../shared/admin.service';
import { AuthService } from '../shared/authService';

@Component({
  selector: 'app-sidebar-admin',
  templateUrl: './sidebar-admin.component.html',
  styleUrls: ['./sidebar-admin.component.css']
})
export class SidebarAdminComponent implements OnInit {
  id:any;
  Admin!: any;
  public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Se Déconnecter ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;
  constructor(
    private router:Router, 
    private fb: FormBuilder,
    private adminServ: AdminService,
    private authServ: AuthService,
    private adhServ: AdherentService
  ) { }

  ngOnInit(): void {
    this. id =(localStorage.getItem('CurrentUser') || '');
    this.adhServ.getAdherent(this.id).subscribe( data => {
      console.log(data);
      this.Admin = data;
    })
  }
  logout(){
    this.authServ.logout()
  } }