import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from '../shared/adherent.service';
import { AuthService } from '../shared/authService';
import { HttpClient } from '@angular/common/http';
import { Adhérent } from '../Model/adhérent';
@Component({
  selector: 'app-liste-membre',
  templateUrl: './liste-membre.component.html',
  styleUrls: ['./liste-membre.component.css']
})
export class ListeMembreComponent implements OnInit {
  router: any;
  id:any;
  Adhérent!: any;
  // Adherent:any;
  filterAdherent:any;
  p : number=1;
  term!: string;
  searchTerm!: string;
  // Adherent!: Adhérent[];
  Adherent!: any;
  Entreprise!: any;
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



    this.affiche();
    this. id =(localStorage.getItem('CurrentUser') || '');
    this.adhServ.getAdherent(this.id).subscribe( data => {
      console.log(data);
      this.Entreprise = data;
    })  
  }
  affiche(){
    this.adhServ.getAllAdherent().subscribe(
      (res:any)=>{
      //lena a7na res feha kol chay m5alta donc star hedha ya3mel filtration bel role 
      this.Adherent=res.filter((item:any) => item.role=="Adherent")

      console.log(this.filterAdherent);
    
      },
    )
  }


 
  logout(){
    this.authServ.logout()
  }
  }
