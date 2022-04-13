import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from '../shared/adherent.service';
import { AuthService } from '../shared/authService';
@Component({
  selector: 'app-list-adherents',
  templateUrl: './list-adherents.component.html',
  styleUrls: ['./list-adherents.component.css']
})
export class ListAdherentsComponent implements OnInit {
  router: any;
  id:any;
  Adhérent!: any;
  Adherent:any;
  p : number=1;
  Admin!: any;
  public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Supprimer cet Adhérent ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  constructor( private adhServ: AdherentService,
    private authServ: AuthService,
    private toastr: ToastrService,) 
    { }

  ngOnInit(): void {
    this.affiche(),
    this. id =(localStorage.getItem('CurrentUser') || '');
    this.adhServ.getAdherent(this.id).subscribe( data => {
      console.log(data);
      this.Admin = data;
    })  
  }
 
  affiche(){
    this.adhServ.getAllAdherent().subscribe(
      res=>{
        this.Adherent=res
      },
    )
  }
  delete(id:any){
    this.adhServ.deleteAdherent(id).subscribe( data => {    
    this.affiche()
     this.toastr.success("Adhérent supprimé avec succes")
    this.router.navigate(['/list-adherents']);  
    },
    )
  }
  update(id:any){
    this.adhServ.updateAdherent(this.id,this.Adherent).subscribe( data => {
     this.toastr.success("Employé modifié avec succès")
    this.router.navigate(['/liste-employe']);
   },
    )
  }

  logout(){
    this.authServ.logout()
  }
  }
  






