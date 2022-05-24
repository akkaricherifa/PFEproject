import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { AdherentService } from '../shared/adherent.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  result: any;
  groupe:any;
  name :any;
  id:any;
  Adherent:any;
  niveau: any;
  competence: any;
  pointFormat: any;
  constructor(private adhServ: AdherentService) {}

  ngOnInit(): void {


    this. id =(localStorage.getItem('CurrentUser') || '');
    this.adhServ.getAdherent(this.id).subscribe( data => {
      console.log(data);
      this.Adherent = data;
    })
      this.adhServ.get().subscribe(
        (res:any)=>{
        this.result =res
        this.name = this.result.map((item: any) => item.nom);
      this.name.forEach((element:any) => {  
      });
    
      this.niveau = this.result.map((item: any) => item.niveau);
      
      this.chart()

        },
      )
      }

      chart(){     

    const ctxx = 'myChart2';
    const myChart1 = new Chart(ctxx, {
      type: 'radar',


      data: {
        labels: this.name,
  
        datasets: [
          {
            label: 'Courbe de Mes Compétences %',

            data: this.niveau,
          

            backgroundColor: [
              '#86E3CE',
              '#7FACD6',
              '#BFB8DA',
              '#AE6378',
              '#43978D',
              '#264D59',
              '#FD8F52',
              '#522157',
              'red',
              '#DCB665',
              '#CD7672',
              '#DE5B6D',
              '#CBE54E',
              '#88CDF6',
              '#264D59',
              '#F9E07F',
              '#C6A477',
              '#86E3CE',
              
            ],
            borderColor: [
              '#86E3CE',
              '#7FACD6',
              '#BFB8DA',
              '#AE6378',
              '#43978D',
              '#264D59',
              '#FD8F52',
              '#522157',
              'red',
              '#DCB665',
              '#CD7672',
              '#DE5B6D',
              '#CBE54E',
              '#88CDF6',
              '#264D59',
              '#F9E07F',
              '#C6A477',
              '#86E3CE',
              
            ],
            borderWidth: 4,
            borderAlign:'inner',
          },
        ],
      },
    });
  }
      
  

    

}
