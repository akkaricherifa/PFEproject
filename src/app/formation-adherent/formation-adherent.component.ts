import { Component, OnInit } from '@angular/core';
import {  CalendarOptions } from '@fullcalendar/angular';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
@Component({
  selector: 'app-formation-adherent',
  templateUrl: './formation-adherent.component.html',
  styleUrls: ['./formation-adherent.component.css']
})
export class FormationAdherentComponent implements OnInit {

  constructor(private router:Router) { }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    // dateClick: this.handleDateClick.bind(this), 
    eventClick: this.eeventClick.bind(this), 
    events: [
      { title: 'event 5000000', date: '2022-04-25',formateur:"bedis",formateur2:"aziz",dateFin:'2022/02/10' },
      { title: 'event 500005', date: '2022-04-01',formateur:"bedis",formateur2:"aziz",dateFin:'2022/02/10' },
      { title: 'event 200', date: '2022-04-25',formateur:"bedis",formateur2:"aziz",dateFin:'2022/02/10' },
      { title: 'event 2', date: '2022-04-20' }
    ]
  };
  handleDateClick(arg:any) {
    console.log(arg);
    
   
  }
  eeventClick(model:any){
    console.log(model.event._def.title);
    console.log(model.event._def.extendedProps.formateur);
    console.log(model.event._def.extendedProps.formateur2);
    console.log(model.event._def.extendedProps.dateFin);
    }

    ngOnInit(): void {
   
    }
    
  }
    

