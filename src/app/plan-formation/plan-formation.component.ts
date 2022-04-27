import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import {  CalendarOptions } from '@fullcalendar/angular';

import dayGridView from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { Formation } from '../Model/formation';

@Component({
  selector: 'app-plan-formation',
  templateUrl: './plan-formation.component.html',
  styleUrls: ['./plan-formation.component.css']
})
export class PlanFormationComponent implements OnInit {

  // CalendarOptions!:any;
   
  constructor(private router:Router ) { }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    // dateClick: this.handleDateClick.bind(this), 
    eventClick: this.eeventClick.bind(this), 
    events: [
      { title: 'event 5000000', date: '2022-04-25',formateur:"bedis",formateur2:"aziz",dateFin:'2022/02/10' },
      { title: 'event 5000000', date: '2022-04-01',formateur:"bedis",formateur2:"aziz",dateFin:'2022/02/10' },
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
    
    //this.router.navigate(['/acceuil']);
  
  ngOnInit(): void {
   
  }
  
}
  

