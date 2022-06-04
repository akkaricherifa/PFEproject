import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from '../shared/adherent.service';
import { AuthService } from '../shared/authService';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
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
  adherent: any;
  nom:any
  _id:any
  prenom:any
  niveau:any
  cycle:any
  form:any
  etablissement:any
  searchTerm!: string;
  // Adherent!: Adhérent[];
  Adherent!: any;
  Admin!: any;
  closeResult = '';
  updateform!: FormGroup
  public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Supprimer cet Adhérent ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  constructor( private adhServ: AdherentService,
    private authServ: AuthService,
    private toastr: ToastrService,
    private http: HttpClient,
    private modalService: NgbModal,
    private fb: FormBuilder,
    private route: Router) 
    { }

  ngOnInit(): void {
    this.http.get<Adhérent[]>('./assets/data/countries.json')
    .subscribe((data: Adhérent[]) => {
      this.Adherent = data;
    });
 
    this.adhServ.getAdherent(this.id).subscribe( data => {
      console.log(data);
      this.Adherent = data;
    })
    
    this.affiche();
    // this.adhServ.getAdherent(this.id).subscribe( data => {
    //   console.log(data);
    //   this.Adherent = data;
    // })  

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
    //  this.toastr.success("Adhérent supprimé avec succes")
    this.router.navigate(['/list-adherent']);  
    },
    )
  }

  update(){
      
    this.adhServ.updateAdherent(this.id,this.Adherent).subscribe( data => {
      this.affiche()
      this.toastr.success(" modifiée avec succès")
     this.router.navigate(['/list-adherent']);
    },(error)=>{
      console.log(error);
    });
 }

  logout(){
    this.authServ.logout()
  }


  open(content:any) {
    this.affiche()
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
  opensweetalert2(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Adhérent Supprimé avec Succès',
      showConfirmButton: false,
      timer: 2000
    })
  }
 



  }
  






