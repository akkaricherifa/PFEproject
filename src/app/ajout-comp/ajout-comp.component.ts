import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ajout-comp',
  templateUrl: './ajout-comp.component.html',
  styleUrls: ['./ajout-comp.component.css']
})
export class AjoutCompComponent implements OnInit {
  ajoutForm!: FormGroup
  p : number=1;
  competence:any;
  public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Supprimer cette Suggestion ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;
  constructor( private adminServ: AdminService,
    private router:Router,
    private fb: FormBuilder,) { }
 
  ngOnInit(): void {
    this.affiche()
    this.ajoutForm= this.fb.group ( 
      {
        nom:['',Validators.required],
        niveau:['',Validators.required],
   
      }

    )
  }
  affiche(){
    this.adminServ.getAllCompetence().subscribe(
      res=>{
        this.competence=res
      },
    )
  }

  ajoutComp() {
    this.adminServ.ajouterCompetence(this.ajoutForm.value).subscribe((res) => {
      this.affiche()
      this.router.navigate(['/ajoutCompAdmin']);


    });
    console.log(this.ajoutForm.value);
  }

  delete(id:any){
    this.adminServ.deleteCompetence(id).subscribe( (res) => {    
    this.affiche()
    this.router.navigate(['/ajoutCompAdmin']);  

 
    },
    )
  }
  opensweetalert(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Nouvelle Compétence est Ajoutée avec Succès',
      showConfirmButton: false,
      timer: 2000
    })
  }
  opensweetalert2(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Compétence Supprimée avec Succès',
      showConfirmButton: false,
      timer: 2000
    })
  }
}