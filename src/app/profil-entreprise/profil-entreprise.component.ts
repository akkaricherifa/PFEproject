import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-profil-entreprise',
  templateUrl: './profil-entreprise.component.html',
  styleUrls: ['./profil-entreprise.component.css']
})
export class ProfilEntrepriseComponent implements OnInit {
id:any;
Entreprise!:any;
constructor(private entrepriseServ: EntrepriseService,
  private route: ActivatedRoute,
  private toastr: ToastrService,
  private router: Router) { }

  ngOnInit(): void {
  
      
    this.id=this.route.snapshot.params['id'];
    
    this.entrepriseServ.getEntreprise(this.id).subscribe( data => {
      console.log(data);  
      this.Entreprise = data;
    })
  
    }}


