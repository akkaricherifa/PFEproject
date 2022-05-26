import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from '../shared/adherent.service';
import { Chart } from 'chart.js';
import { AdminService } from '../shared/admin.service';

@Component({
  selector: 'app-fiche-competence',
  templateUrl: './fiche-competence.component.html',
  styleUrls: ['./fiche-competence.component.css']
})
export class FicheCompetenceComponent implements OnInit {
  Adherent!: any;
  id:any;
  result: any;
  groupe:any;
  name :any=[];
  niveauUser: any;
  competence: any;
  pointFormat: any;
  test:any=[];
  arr: any = [];

  constructor( private route : ActivatedRoute,
    private adhServ: AdherentService ,
    private toastr :ToastrService ,
    private adminServ : AdminService) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];  
  this.adhServ.getAdherent(this.id).subscribe( data => {
    console.log(data);  
    this.Adherent = data; 

  })
      this.adminServ.getCompetenceByAdherent(this.id).subscribe(
        (res:any)=>{
          this.result =res
  console.log(res);
  this.result.forEach((element:any) => {  
    this.name.push(element.competence)
    
  });

 for (var i = 0; i < this.name.length; i++) {
this.arr.push(this.name[i].nom)  
}
    
        this.result.forEach((element:any) => {  
          this.name.push(element.competence)
          
        });
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
            label: 'Courbe de  Compétences %',

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
            borderWidth: 4,
            borderAlign:'inner',
          },
        ],
      },
    });
  }

}






  


  

