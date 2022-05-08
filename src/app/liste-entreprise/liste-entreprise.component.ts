import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-liste-entreprise',
  templateUrl: './liste-entreprise.component.html',
  styleUrls: ['./liste-entreprise.component.css']
})
export class ListeEntrepriseComponent implements OnInit {
  p : number=1;
  router: any;
  id:any;
  Entreprise!:any;

  constructor( private entrepriseServ: EntrepriseService) { }

  ngOnInit(): void {
    this.affiche();
    this.entrepriseServ.getEntreprise(this.id).subscribe( data => {
      console.log(data);
      this.Entreprise = data;
    }) 
  }


  affiche(){
    this.entrepriseServ.getAllEntreprise().subscribe(
      res=>{
        this.Entreprise=res
      },
    )
  }
}
