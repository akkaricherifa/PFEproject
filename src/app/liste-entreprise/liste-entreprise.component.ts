import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from '../shared/entreprise.service';
interface entreprise {
  id:number;
  nom:string;
  prenom:string;
  email:string;

}

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
  term!: string;
  searchTerm!: string;
  constructor( private entrepriseServ: EntrepriseService,
    private http: HttpClient,) { }

  ngOnInit(): void {
    this.http.get<entreprise[]>('./assets/data/countries.json')
    .subscribe((data: entreprise[]) => {
      this.Entreprise = data;
    });


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
