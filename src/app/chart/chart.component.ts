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
        UnitEnseignement: 'Psychologique',
        nomFiliere: 'PolyTechnique',
        population: '220',
        group: 'groupe P1',
      },
      {
        id: 2,
        UnitEnseignement: 'Psychologique',
        nomFiliere: 'Architecture',
        population: '250',
        group: 'groupe A1',
      },
      {
        id: 3,
        UnitEnseignement: 'Psychologique',
        nomFiliere: 'Mécanique',
        population: '140',
        group: 'groupe M2',
      },
      {
        id: 4,
        UnitEnseignement: 'psychologique',
        nomFiliere: 'Electro-magnitique',
        population: '170',
        group: 'groupe E1',
      },
      {
        id: 5,
        UnitEnseignement: 'Physique',
        nomFiliere: 'Préparatoire',
        population: '500',
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
            label: '# of Votes',

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

    const ctxx = 'myChart2';
    const myChart1 = new Chart(ctxx, {
      type: 'bar',

      data: {
        labels: this.name,
        datasets: [
          {
            label: '# of Votes',

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
