import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-pie2',
  templateUrl: './pie2.component.html',
  styleUrls: ['./pie2.component.css']
})
export class Pie2Component implements OnInit {


  highcharts = Highcharts;
  chartOptions = {};

  constructor() { }

  ngOnInit() {

      this.chartOptions = {
        chart: {
          plotBorderWidth: null,
          plotShadow: false,
         
        },
        title: {
          text: "Nombre des Adhérents par Université"
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
  
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
  
            dataLabels: {
              enabled: false
            },
            showInLegend: true
          }
        },
        exporting: {
          enabled: true
        },
        credits: {
          enabled: false
        },
        series: [{
          type: 'pie',
          name: '%',
           data: [
              ['Isitcom',   10.50],
             {
                name:'Epi',
                y:10.10,
              },
              {
                name: 'Issat',
                y: 11.84
            }, {
                name: 'Essths',
                y: 5.85
            },  {
                name: 'Iset',
                y: 2.18
            },   {
                name: 'Polytechnique',
                y: 9.61
              }]
            }]
        };
         
  
      HC_exporting(Highcharts);
  
      setTimeout(() => {
        window.dispatchEvent(
          new Event('resize')
        );
      }, 300);
    }
  

}

