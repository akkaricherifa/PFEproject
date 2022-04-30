import { createComponentType } from '@angular/compiler/src/render3/view/compiler';
import { Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, VERSION, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';
import { CompetenceService } from '../shared/competence.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  constructor( private competenceServ: CompetenceService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService) { }
  addRow() {
    this.dynamicArray.push({ nomCompetence: '', Niveau: '' });
    console.log('New row added successfully', 'New Row');
  }
  deleteRow(index:any) {
    this.dynamicArray.splice(index, 1);
  }
  // getValues() {
  //   console.log(this.dynamicArray);
  // }
  
 


  ngOnInit(): void {
    // createCompetence() {
    //   this.competenceServ.createCompetence(this.competenceForm.value).subscribe((res) => {
    //     this.router.navigate(['/reponse-candidat']);
    //     this.toastr.success('Candidat ajouté avec succès');
    //   });
    //   console.log(this.competenceForm.value);
    // }
   
  }

}
