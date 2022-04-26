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
  niveau: any;
  competence: any;
  constructor(private adhServ: AdherentService) {}

  ngOnInit(): void {

    
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
        
    // const ctx = 'myChart';
    // const myChart = new Chart(ctx, {
    //   // type: 'bar',
    //   type: 'pie',

    //   data: {
    //     labels: this.name,
    //     datasets: [
    //       {
    //         label: '# of Competences',

    //         data: this.niveau,
    //         backgroundColor: [
    //           // 'rgba(255, 99, 132, 0.2)',
    //           // 'rgba(54, 162, 235, 0.2)',
    //           // 'rgba(255, 206, 86, 0.2)',
    //           // 'rgba(75, 192, 192, 0.2)',
    //           // 'rgba(153, 102, 255, 0.2)',
    //           // 'rgba(255, 159, 64, 0.2)',
    //           '#483D8B',
    //           '#FFB6C1',
    //           '#6495ED',
    //           '#F5DEB3',
    //           '#008B8B',
    //           '#D87093',
    //           '#20B2AA',
              
              

    //         ],
    //         borderColor: [
    //           // 'rgba(255, 99, 132, 1)',
    //           // 'rgba(54, 162, 235, 1)',
    //           // 'rgba(255, 206, 86, 1)',
    //           // 'rgba(75, 192, 192, 1)',
    //           // 'rgba(153, 102, 255, 1)',
    //           // 'rgba(255, 159, 64, 1)',
             
    //         ],
    //         borderWidth: 1,
    //       },
    //     ],
    //   },
    // });

    const ctxx = 'myChart2';
    const myChart1 = new Chart(ctxx, {
      type: 'bar',

      data: {
        labels: this.name,
        datasets: [
          {
            label: 'Courbe de mes Compétences',

            data: this.niveau,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  }
      
  
      
   
    

}
