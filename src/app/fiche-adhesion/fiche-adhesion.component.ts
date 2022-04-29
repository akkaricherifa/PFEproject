import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AdherentService } from '../shared/adherent.service';
import { AdminService } from '../shared/admin.service';
import { AuthService } from '../shared/authService';

@Component({
  selector: 'app-fiche-adhesion',
  templateUrl: './fiche-adhesion.component.html',
  styleUrls: ['./fiche-adhesion.component.css']
})
export class FicheAdhesionComponent implements OnInit {
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
}