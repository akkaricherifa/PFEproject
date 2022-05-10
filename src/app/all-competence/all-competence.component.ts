import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { CompetenceService } from '../shared/competence.service';
@Component({
  selector: 'app-all-competence',
  templateUrl: './all-competence.component.html',
  styleUrls: ['./all-competence.component.css']
})
export class AllCompetenceComponent implements OnInit {
  result: any;
  name = [];
  population: any;
  competence: any;
  niveau: any;
  constructor(private competenceServ: CompetenceService) {}

  ngOnInit(): void {
    this.competenceServ.getAllCompetence().subscribe(
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
    const ctx = 'myChart';
    const myChart = new Chart(ctx, {
      type: 'bar',

      data: {
        labels: this.name,
        datasets: [
          {
            label: '# of Skills',

            data: this.niveau,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(54, 162, 235, 0.2)',
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
              'rgba(255, 99, 132, 1)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(153, 102, 255, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
    });
  }
}
