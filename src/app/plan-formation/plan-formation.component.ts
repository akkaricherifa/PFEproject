import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import {  CalendarOptions } from '@fullcalendar/angular';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import dayGridView from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { Formation } from '../Model/formation';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from '../shared/formation.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { isExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-plan-formation',
  templateUrl: './plan-formation.component.html',
  styleUrls: ['./plan-formation.component.css']
})
export class PlanFormationComponent implements OnInit {
  @ViewChild ('content') content:any
  @ViewChild ('content2') content2:any
  formationForm!: FormGroup;
  lieu:any
  Formation!:any;
  dateObj = new Date();
  yearMonth=this.dateObj.getUTCFullYear() + '-' + (this.dateObj.getUTCMonth() + 1);
  dateDebut:any;
   a:any=[]
   b:any=[]
   d:any
   form:any
   id:any;
   month :any;
   formation:any
   year :any;
   title:any
   date:any
   heure:any
   duree:any
   formateur:any
   prix:any
  //  lieu:any
   day:any
   r:any
   t:any=[]
   _id:any
  event:any=[]
   CalendarOptions!:any;
    closeResult = '';
    public popoverTitle:string=' Alert De Confirmation';
    public popoverMessage:string='Voulez Vous Vraiment Supprimer cette Formation ?';
    public confirmClicked:boolean=false;
    public cancelClicked:boolean=false;

    refresh: Subject<any> = new Subject();
    

  c = [
    '#378103',
    
  ];

  $ref: any;
   constructor(private router:Router ,
    private modalService: NgbModal,
    private formationServ: FormationService,
    private toastr: ToastrService, 
    private fb: FormBuilder,) { }

    ngOnInit(): void {
      this.formationServ.getFormation(this.id).subscribe((data:any)=>{
        this.event = data;
      }) 
      
      this.formationServ.getAllFormation().subscribe((res:any)=>{
        this.event=res

      
      this.affiche()
        this.formationForm= this.fb.group ( 
          {
            title:['',Validators.required],
            heure:['',Validators.required],
            date_fin:['',Validators.required],
            duree:['',Validators.required],
            formateur:['',Validators.required],
            prix:['',Validators.required],
            lieu:['',Validators.required],
          }
        )
      
        console.log("bonjour",this.event);
        this.CalendarOptions = {
          
            initialView: 'dayGridMonth',
           dateClick: this.handleDateClick.bind(this), 
          eventClick: this.eeventClick.bind(this), 
            events:this.event,
            eventColor: this.c[Math.floor(Math.random() * this.c.length) + 1],
            editable: true,
          
                 

                       
      }}
      
    
    )
    this.refresh.next();
  }


  handleDateClick(arg:any) {
    console.log(arg);
    this.dateDebut=arg.dateStr;
      this.open(this.content)
    // this.eeventClick(arg)
    
   
  }

  eeventClick(model:any){
    this.open(this.content2)

    this._id=model.event._def.extendedProps._id;
    console.log(model.event._def.title);
    this.title=model.event._def.title

    console.log("heure",model.event._def.extendedProps.heure);
    this.heure=model.event._def.extendedProps.heure

    console.log(model.event._def.extendedProps.date_fin);
    this.date=model.event._def.extendedProps.date_fin

    console.log(model.event._def.extendedProps.duree);
    this.duree=model.event._def.extendedProps.duree

    console.log(model.event._def.extendedProps.formateur);
    this.formateur=model.event._def.extendedProps.formateur

    console.log(model.event._def.extendedProps.prix);
    this.prix=model.event._def.extendedProps.prix

    console.log(model.event._def.extendedProps.lieu);
    this.lieu=model.event._def.extendedProps.lieu

    
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
   
  createFormation() {
    
    let title=this.formationForm.controls.title.value;
    let heure=this.formationForm.controls.heure.value;
    let date_fin=this.formationForm.controls.date_fin.value;
    let duree=this.formationForm.controls.duree.value;
    let formateur=this.formationForm.controls.formateur.value;
    let prix=this.formationForm.controls.prix.value;
    let lieu=this.formationForm.controls.lieu.value;
    let date=this.dateDebut
    let form ={title,heure, date,date_fin,duree,formateur,prix,lieu}
    this.formationServ.createFormation(form).subscribe((res) => {
      this.affiche()
      this.router.navigate(['/plan-formation']);
      this.toastr.success('Formation ajoutée avec Succès');
      let calendarApi = this.$ref.fullCalendar.getApi()
      calendarApi.refetchEvents()
    });
    console.log();
  }


  affiche(){
    this.formationServ.getAllFormation().subscribe(
      res=>{
        this.event=res
        this.refresh.next()

        console.log("welcome",this.event);
        
      },
    )
  }
 
  
  delete(id:any){
    this.formationServ.deleteFormation(this._id).subscribe( data => {    
    this.affiche()
     this.toastr.success("formation supprimé avec succes")
    this.router.navigate(['/plan-formation']);  
    },
    )
  }



  update(){
    console.log(this._id);

    console.log("update ",this.lieu);

    let title=this.title;
    let heure=this.heure;
    let date_fin=this.formationForm.controls.date_fin.value;
    let duree=this.duree;
    let formateur=this.formateur;
    let prix=this.prix;
    let lieu=this.lieu;
    let date=this.date
    this.form ={title,heure, date,date_fin,duree,formateur,prix,lieu}
    
    
      
    this.formationServ.updateFormation(this._id,this.form).subscribe( data => {
      // this.affiche()
      this.toastr.success("formation modifiée avec succès")
     this.router.navigate(['/plan-formation']);
    },(error)=>{
      console.log(error);
    });
 }


}
  

// function jQuery(arg0: string) {
//   throw new Error('Function not implemented.');
// }

