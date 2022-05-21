import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent implements OnInit {
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
        text: "Nombre des Adhérents par Civilité  "
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
        color:'yellow',
        type: 'pie',
        name: '%',
         data: [
            ['Femme',   35.0],
           
            {
               name: 'Homme',
               y: 45.0,
               
               sliced: true,
               selected: true
            }
            
         ]
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
