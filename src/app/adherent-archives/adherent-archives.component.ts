import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from '../shared/adherent.service';
import { AuthService } from '../shared/authService';
interface Adhérent {
  id:number;
  nom:string;
  prenom:string;

}
@Component({
  selector: 'app-adherent-archives',
  templateUrl: './adherent-archives.component.html',
  styleUrls: ['./adherent-archives.component.css']
})
export class AdherentArchivesComponent implements OnInit {
  p : number=1;
  router:any;
  id:any;
  Adhérent!: any;
  filterAdherent:any;
  term!: string;
  searchTerm!: string;
  Adherent!: Adhérent[];
  public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Supprimer cet Adhérent ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;
  constructor( private adhServ: AdherentService,
    private authServ: AuthService,
    private toastr: ToastrService,
    private http: HttpClient) 
    { }

  ngOnInit(): void {

    this.http.get<Adhérent[]>('./assets/data/countries.json')
    .subscribe((data: Adhérent[]) => {
      this.Adherent = data;
    });
  }



  
}
