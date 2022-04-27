import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AdherentService } from '../shared/adherent.service';
import { AdminService } from '../shared/admin.service';
import { AuthService } from '../shared/authService';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-sidebar-entreprise',
  templateUrl: './sidebar-entreprise.component.html',
  styleUrls: ['./sidebar-entreprise.component.css']
})
export class SidebarEntrepriseComponent implements OnInit {
id:any;
Entreprise!:any;
  constructor(
    private router:Router, 
    private fb: FormBuilder,
    private entrepriseServ: EntrepriseService,
    private authServ: AuthService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void  {
     
    this.id =(localStorage.getItem('CurrentUser') || '');
    console.log("id entreprise ",this.id);
    
    
    this.entrepriseServ.getEntreprise(this.id).subscribe( data => {
      // console.log(data);  
      this.Entreprise = data;
    })}
  logout(){
    this.authServ.logout()
  }
}
