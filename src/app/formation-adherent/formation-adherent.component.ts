import { Component, OnInit } from '@angular/core';
import {  CalendarOptions } from '@fullcalendar/angular';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import { FormationService } from '../shared/formation.service';
@Component({
  selector: 'app-formation-adherent',
  templateUrl: './formation-adherent.component.html',
  styleUrls: ['./formation-adherent.component.css']
})
export class FormationAdherentComponent implements OnInit {
  c = [
    '#378103',
    '#378050',
    '#378006',
    '#208006',
    '#008006',
    '#968006',
    '#32000',
  ];
  
  event:any=[]
  constructor(private router:Router,
    private formationServ: FormationService) { }

  calendarOptions: CalendarOptions = {
    events:this.event,
    eventColor: this.c[Math.floor(Math.random() * this.c.length) + 1],
    editable: true,
    initialView: 'dayGridMonth',
    eventClick: this.eeventClick.bind(this), 
  
  };
  handleDateClick(arg:any) {
    console.log(arg);
  }



  eeventClick(model:any){
    console.log(model.event._def.title);
    console.log(model.event._def.extendedProps.heure);
    console.log(model.event._def.extendedProps.dateFin);
    console.log(model.event._def.extendedProps.duree);
    console.log(model.event._def.extendedProps.lieu);
    console.log(model.event._def.extendedProps.prix);

    }

    ngOnInit(): void {
      this.formationServ.getAllFormation().subscribe((res:any)=>{
        this.event=res
      }
    )}
    
  }
    

