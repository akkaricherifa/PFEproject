import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Chart } from 'chart.js';
import { AdherentService } from '../shared/adherent.service';
import { AdminService } from '../shared/admin.service';
import { CompetenceService } from '../shared/competence.service';
import { EntrepriseService } from '../shared/entreprise.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})
export class RechercheComponent implements OnInit {
  result: any;
  name = [];
  Admin!: any;
  loginResponse:any
  p : number=1;
  population: any;
  Competence: any;
  Adherent:any;
  niveau: any;
  term!: string;
  id:any;
  arr: any = [];
  i:any;
  rechercheForm!: FormGroup
  searchTerm!: string;
  competence: any;
  Entreprise!:any;
  competenceForm!: FormGroup
  constructor(private competenceServ: CompetenceService,
  private adminServ : AdminService, 
  private entrepriseServ: EntrepriseService,
  private route: ActivatedRoute,
  private http: HttpClient,
  private fb: FormBuilder,
  private adhServ: AdherentService){}

  ngOnInit(): void {
    this. id =(localStorage.getItem('CurrentUser') || '');
    this.entrepriseServ.getEntreprise(this.id).subscribe( data => {
      console.log(data);
      this.Entreprise = data;
    })
    this.get()
    this.competenceForm= this.fb.group ( 
      {
        nom:['',Validators.required],
        niveau:['',Validators.required],

      }
    )
    // for (var i = 0; i < this.Adherent.length; i++) {
    //   this.arr.push(this.Adherent[i].nom)  
    // }

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
      
    },
    err => {
      this.loginResponse=this.opensweetalert2();
    });
}
opensweetalert2() {
  Swal.fire({
    position: 'top-end',
    icon: 'warning',
    title: 'pas de Profils Compétents',
    showConfirmButton: false,
    timer: 3500
  })
 }
}
