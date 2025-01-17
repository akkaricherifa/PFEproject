import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdherentService } from '../shared/adherent.service';
import { AdminService } from '../shared/admin.service';
import { AuthService } from '../shared/authService';

@Component({
  selector: 'app-espace-rh',
  templateUrl: './espace-rh.component.html',
  styleUrls: ['./espace-rh.component.css']
})
export class EspaceRHComponent implements OnInit {
  id:any;
  RH!: any;
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
      this.RH = data;
    })
  }
  logout(){
    this.authServ.logout()
  }
}
