import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  result: any;
  name = [];
  population: any;
  competence: any;
  constructor() {}

  ngOnInit(): void {
    const filieres = [
      {
        id: 1,
        UnitEnseignement: 'Competence',
        nomFiliere: 'Angular',
        population: '220',
        group: 'groupe P1',
      },
      {
        id: 2,
        UnitEnseignement: 'Competence',
        nomFiliere: 'Flutter',
        population: '250',
        group: 'groupe A1',
      },
      {
        id: 3,
        UnitEnseignement: 'Competence',
        nomFiliere: 'Spring-Boot',
        population: '140',
        group: 'groupe M2',
      },
      {
        id: 4,
        UnitEnseignement: 'Competence',
        nomFiliere: 'React',
        population: '170',
        group: 'groupe E1',
      },
      {
        id: 5,
        UnitEnseignement: 'Competence',
        nomFiliere: 'Intelligence Artificielle',
        population: '400',
        group: ' groupe C1',
      },
      {
      id: 6,
        UnitEnseignement: 'Competence',
        nomFiliere: 'Laravel',
        population: '360',
        group: ' groupe C1',
      },
      {
        id: 7,
          UnitEnseignement: 'Competence',
          nomFiliere: 'NodeJs',
          population: '300',
          group: ' groupe C1',
          
        },
    ];

    this.result = filieres;
    this.name = this.result.map((coins: any) => coins.nomFiliere);

    this.population = this.result.map((coins: any) => coins.population);

    const ctx = 'myChart';
    const myChart = new Chart(ctx, {
      // type: 'bar',
      type: 'pie',

      data: {
        labels: this.name,
        datasets: [
          {
            label: '# of Competences',

            data: this.population,
            backgroundColor: [
              // 'rgba(255, 99, 132, 0.2)',
              // 'rgba(54, 162, 235, 0.2)',
              // 'rgba(255, 206, 86, 0.2)',
              // 'rgba(75, 192, 192, 0.2)',
              // 'rgba(153, 102, 255, 0.2)',
              // 'rgba(255, 159, 64, 0.2)',
              '#483D8B',
              '#FFB6C1',
              '#6495ED',
              '#F5DEB3',
              '#008B8B',
              '#D87093',
              '#20B2AA',
              
              

            ],
            borderColor: [
              // 'rgba(255, 99, 132, 1)',
              // 'rgba(54, 162, 235, 1)',
              // 'rgba(255, 206, 86, 1)',
              // 'rgba(75, 192, 192, 1)',
              // 'rgba(153, 102, 255, 1)',
              // 'rgba(255, 159, 64, 1)',
             
            ],
            borderWidth: 1,
          },
        ],
      },
    });

    const ctxx = 'myChart2';
    const myChart1 = new Chart(ctxx, {
      type: 'bar',

      data: {
        labels: this.name,
        datasets: [
          {
            label: '# of Competences',

            data: this.population,
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
