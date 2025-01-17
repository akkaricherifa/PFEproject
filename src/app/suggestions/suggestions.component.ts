import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { SuggestionService } from '../shared/suggestion.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {
  p : number=1;
  closeResult = '';
  suggestions:any;
  id:any;
  suggestionForm!: FormGroup
  Suggestion:any;
  public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Supprimer cette Suggestion ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;
  constructor(
    private router:Router,
    private fb: FormBuilder,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private suggestionServ : SuggestionService) { }

 
    ngOnInit(): void {
      this.affiche();
      this.suggestionForm= this.fb.group ( 
        {
          titre:['',Validators.required],
          content:['',Validators.required],
     
        }
  
      )
    }
    affiche(){
      this.suggestionServ.getAllSuggestion().subscribe(
        res=>{
          this.suggestions=res
        },
      )
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
  createSuggestion() {
    this.suggestionServ.createSuggestion(this.suggestionForm.value).subscribe((res) => {
      this.affiche()
      this.router.navigate(['/suggestion']);
      // this.toastr.success('suggestion Ajouté avec succès');
    });
    console.log(this.suggestionForm.value);
  }
  update(){
      
    this.suggestionServ.updateSuggestion(this.id,this.Suggestion).subscribe( data => {
     this.router.navigate(['/suggestions']);
    },(error)=>{
      console.log(error);
    });
 }

  delete(id:any){
    this.suggestionServ.deleteSuggestion(id).subscribe( (res) => {    
    this.affiche()
    this.router.navigate(['/suggestion']);  
    //  this.toastr.success("Suggestion supprimé avec succes")
 
    },
    )
  }
  opensweetalert(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Suggestion Ajoutée avec Succès',
      showConfirmButton: false,
      timer: 2000
    })
  }
  opensweetalert2(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Suggestion Supprimée avec Succès',
      showConfirmButton: false,
      timer: 2000
    })
  }
  opensweetalert3(){
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Suggestion Modifée avec Succès',
      showConfirmButton: false,
      timer: 2000
    })
  }
}
