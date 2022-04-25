import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
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
   
  constructor( ) { }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    dateClick: this.handleDateClick.bind(this), 
    events: [
      { title: 'event 1', date: '2022-04-25' },
      { title: 'event 2', date: '2022-04-27' }
    ]
  };
  
  handleDateClick(arg:any) {
    alert('date click! ' + arg.dateStr)
  }
  ngOnInit(): void {
   
  }
  
}
  

