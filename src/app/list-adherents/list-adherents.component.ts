import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from '../shared/adherent.service';
import { AuthService } from '../shared/authService';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
interface Adhérent {
  id:number;
  nom:string;
  prenom:string;
  email:string;

}


 @Component({
  selector: 'app-list-adherents',
  templateUrl: './list-adherents.component.html',
  styleUrls: ['./list-adherents.component.css']
})
export class ListAdherentsComponent implements OnInit {
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
  Admin!: any;
  closeResult = '';
  public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Supprimer cet Adhérent ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  constructor( private adhServ: AdherentService,
    private authServ: AuthService,
    private toastr: ToastrService,
    private http: HttpClient,
    private modalService: NgbModal,) 
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
      this.Admin = data;
    })  
  }
 
  affiche(){
    this.adhServ.getAllAdherent().subscribe(
      (res:any)=>{
      //lena 5ater res feha kol chay m5alta ( adherent/ rh/ ...) donc star hedha ya3mel filtration bel role adherent
      this.Adherent=res.filter((item:any) => item.role=="Adherent")

      console.log(this.filterAdherent);
    
      },
    )
  }

  
  delete(id:any){
    this.adhServ.deleteAdherent(id).subscribe( data => {    
    this.affiche()
     this.toastr.success("Adhérent supprimé avec succes")
    this.router.navigate(['/list-adherent']);  
    },
    )
  }

  update(id:any){
     
    this.adhServ.updateAdherent(this.id,this.Adherent).subscribe( data => {
      this.affiche()
      this.toastr.success("Adhérent modifié avec succès")
     this.router.navigate(['/list-adherent']);
    },(error)=>{
      console.log(error);
    });
 }


  logout(){
    this.authServ.logout()
  }


  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
   
  }
  }
  






