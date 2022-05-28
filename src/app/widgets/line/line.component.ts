import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  highcharts = Highcharts;
   chartOptions = {};

  constructor() { }

  ngOnInit() {

    this.chartOptions = {
      
      chart: {
        type: "spline"
     },

     title: {
      text: "Nombre des Adhérents par An"
   },

     xAxis:{
      title:{
        text:"Ans"
     } ,
      categories:["2018", "2019", "2020", "2021","2022"]
   },

   yAxis: {          
    title:{
       text:"Nombre des Adhérents"
    } 
 }, 

 tooltip: {
  split: true,
  valueSuffix: ' people'
},

exporting: {
  split:true,
  valueSuffix: ' people' 
},

credits:{
  enabled:false
},

series: [
  {
     name:"Nombre des Adhérents",
     data: [30, 50, 80, 100,120]
  }]


};
  
    HC_exporting(Highcharts);

    setTimeout (() => {
      window.dispatchEvent(
        new Event ('resize')
      );
    },300);


  }

}
