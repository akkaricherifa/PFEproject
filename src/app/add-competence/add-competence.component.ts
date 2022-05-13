import { createComponentType } from '@angular/compiler/src/render3/view/compiler';
import { Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, VERSION, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { CompetenceService } from '../shared/competence.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdherentService } from '../shared/adherent.service';
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
  // name :any;
  niveau: any;
  competence: any;

  constructor( private competenceServ: CompetenceService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private adhServ: AdherentService) { }
  addRow() {
    this.dynamicArray.push({ nom: this.competenceForm.value.nom, niveau: this.competenceForm.value.niveau });
    console.log('New row added successfully',this.dynamicArray);
    
  }

  deleteRow(index:any) {
    this.dynamicArray.splice(index, 1);
  }
  // getValues() {
  //   console.log(this.dynamicArray);
  // }
  
 


  ngOnInit(): void {
    this.competenceForm= this.fb.group ( 
      {
        nom:['',Validators.required],
        niveau:['',Validators.required],

      }

    )
  }
      createCompetence() {
      this.competenceServ.createCompetence(this.competenceForm.value).subscribe((res) => {
        this.router.navigate(['/chart']);
        this.toastr.success('Compétence ajouté avec Succès');
      });
      console.log(this.competenceForm.value);
    }

    
}
