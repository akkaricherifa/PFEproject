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
  name :any=[];
  id:any;
  Adherent:any;
  niveauUser: any;
  competence: any;
  pointFormat: any;
  test:any=[];
  arr: any = [];
  constructor(private adhServ: AdherentService) {}

  ngOnInit(): void {


    this. id =(localStorage.getItem('CurrentUser') || '');
    this.adhServ.getAdherent(this.id).subscribe( data => {
      this.Adherent = data;
    })
      this.adhServ.getCompetenceById(this.id).subscribe(
        (res:any)=>{
        this.result =res
console.log("hello result",res);
  
      this.result.forEach((element:any) => {  
        this.name.push(element.competence)
        
      });

     for (var i = 0; i < this.name.length; i++) {
    this.arr.push(this.name[i].nom)  
  }
      this.niveauUser = this.result.map((item: any) => item.niveauUser);
      
      this.chart()

        },
      )
      }

      chart(){     

    const ctxx = 'myChart2';
    const myChart1 = new Chart(ctxx, {
      type: 'bar',


      data: {
        labels: this.arr,
  
        datasets: [
          {
            label: 'Courbe de Mes Compétences %',

            data: this.niveauUser,
          

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
