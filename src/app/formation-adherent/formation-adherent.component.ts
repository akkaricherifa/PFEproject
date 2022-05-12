import { Component, OnInit, ViewChild  } from '@angular/core';
import {  CalendarOptions } from '@fullcalendar/angular';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { FormationService } from '../shared/formation.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-formation-adherent',
  templateUrl: './formation-adherent.component.html',
  styleUrls: ['./formation-adherent.component.css']
})
export class FormationAdherentComponent implements OnInit {
  @ViewChild ('content2') content2:any
  c = [
    '#378103',
 
  ];
  id:any
  title:any
   date:any
   heure:any
   duree:any
   formateur:any
   prix:any
   lieu:any
  closeResult = '';
  event:any=[]
  CalendarOptions!:any;
  Formation!:any;
  constructor(private router:Router,
    private formationServ: FormationService, private modalService: NgbModal,) { }

  

  handleDateClick(arg:any) {
    console.log(arg);
  }



  eeventClick(model:any){
    this.open(this.content2)
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

    
      ngOnInit(): void {
        this.formationServ.getFormation(this.id).subscribe((data:any)=>{
          this.event = data;
        }) 
        this.formationServ.getAllFormation().subscribe((res:any)=>{
          this.event=res
  
        
        this.affiche()
          
        
          console.log("bonjour",this.event);
          this.CalendarOptions = {
            
              initialView: 'dayGridMonth',
             dateClick: this.handleDateClick.bind(this), 
            eventClick: this.eeventClick.bind(this), 
              events:this.event,
              eventColor: this.c[Math.floor(Math.random() * this.c.length) + 1],
              editable: true,
                         
        }}
      
      )}
     


      affiche(){
        this.formationServ.getAllFormation().subscribe(
          res=>{
            this.event=res
    
            console.log("welcome",this.event);
            
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
    }

  
    


