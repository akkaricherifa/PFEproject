import { createComponentType } from '@angular/compiler/src/render3/view/compiler';
import { Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, VERSION, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { CompetenceService } from '../shared/competence.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdherentService } from '../shared/adherent.service';
import Swal from 'sweetalert2';
import { AdminService } from '../shared/admin.service';
@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  dynamicArray : any[] = [];
  newDynamic:any;
  index:any;
  competenceForm!: FormGroup
  result: any;
  groupe:any;
  id:any;
  // name :any;
  niveau: any;
  competence: any;
  Adherent:any;
  constructor( private competenceServ: CompetenceService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private adhServ: AdherentService,
    private adminServ : AdminService) { }
  addRow() {
    this.dynamicArray.push({ nom: this.competenceForm.value.nom, niveau: this.competenceForm.value.niveau });
    console.log('New row added successfully',this.dynamicArray);
  }
  deleteRow(index:any) {
    this.dynamicArray.splice(index, 1);
  }
  ngOnInit(): void {
    this. id =(localStorage.getItem('CurrentUser') || '');
    this.adhServ.getAdherent(this.id).subscribe( data => {
      console.log(data);
      this.Adherent = data;
    })
    this.get()
    this.competenceForm= this.fb.group ( 
      {
        nom:['',Validators.required],
        niveau:['',Validators.required],

      }
    )
    
  }
    ajoutCompetence2(id:number){
      this.id=localStorage.getItem('CurrentUser') || ''
      let form={ "competence": this.competenceForm.value.nom,
       "niveauUser": this.competenceForm.value.niveau,"adherent":localStorage.getItem('CurrentUser') || ''}
       console.log(form);
       
      this.adhServ.ajoutCompetenceByUser(form).subscribe((res) =>{
        this.router.navigate(['/chart']);

      },(err)=>{
        console.log(err);
        
      }
      );
    }
    
     get(){
      this.adminServ.getAllCompetence().subscribe(
        res=>{
          this.competence=res
        },
      )
     }
    opensweetalert2() {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Compétence Ajoutée avec Succès',
        showConfirmButton: false,
        timer: 3000
      })
     }
     
    
}
