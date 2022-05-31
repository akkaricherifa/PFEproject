import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
import { AdminService } from '../shared/admin.service';
import { CompetenceService } from '../shared/competence.service';
interface competence {
  id:number;
  nom:string;
  niveau:string;

}
@Component({
  selector: 'app-all-competence',
  templateUrl: './all-competence.component.html',
  styleUrls: ['./all-competence.component.css']
})
export class AllCompetenceComponent implements OnInit {
  result: any;
  name = [];
  population: any;
  Competence: any;
  Adherent:any;
  niveau: any;
  term!: string;
  id:any;
  rechercheForm!: FormGroup
  competenceForm!: FormGroup
  searchTerm!: string;
  competence: any;
  constructor(private competenceServ: CompetenceService,
    private http: HttpClient,
    private fb: FormBuilder,
  private adminServ : AdminService) {}

  ngOnInit(): void {
    this.get()
    this.competenceForm= this.fb.group ( 
      {
        nom:['',Validators.required],
        niveau:['',Validators.required],

      }
    )

    this.rechercheForm= this.fb.group ( 
      {
        nom:['',Validators.required],

      }
    )
    this.adminServ.getAllCompetence().subscribe(

      (res:any)=>{
      this.result =res
      this.name = this.result.map((item: any) => item.nom);
    this.name.forEach((element:any) => {  
    });

    this.http.get<competence[]>('./assets/data/countries.json')
    .subscribe((data: competence[]) => {
      this.Competence = data;
    });
  
    this.niveau = this.result.map((item: any) => item.niveau);

    this.chart()

      },
    )
    }
    chart(){
    const ctx = 'myChart';
    const myChart = new Chart(ctx, {
      type: 'radar',

      data: {
        labels: this.name,
        datasets: [
          {
            label: '# of Skills',

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
            borderWidth: 1,
          },
        ],
      },
    });
  }
  affiche(){
    this.adminServ.getAllCompetence().subscribe(
      res=>{
        this.competence=res
      },
    )
  }


  get(){
    this.adminServ.getAllCompetence().subscribe(
      res=>{
        this.competence=res
      },
    )
   }

recherche(){
  let a:any
   console.log("hhhhhhhhhhhhhhhhhhhhh",this.rechercheForm.controls.nom.value);
  
  this.adminServ.getAdherentByCompetence(this.rechercheForm.controls.nom.value).subscribe((data) => {
      this.Adherent = data;
      console.log("hello",this.Adherent);
      
    });
}

}
