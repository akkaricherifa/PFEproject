import { Component, OnInit } from '@angular/core';
import { Adhérent } from '../Model/adhérent';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from '../shared/adherent.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profil-adherent',
  templateUrl: './profil-adherent.component.html',
  styleUrls: ['./profil-adherent.component.css']
})
export class ProfilAdherentComponent implements OnInit {


  Adherent!: any;
  id:any;

  constructor( private route : ActivatedRoute,
    private adhServ: AdherentService ,
    private toastr :ToastrService) { }

  ngOnInit(): void {
   this.id=this.route.snapshot.params['id'];
    
  this.adhServ.getAdherent(this.id).subscribe( data => {
    console.log(data);  
    this.Adherent = data;
  })
  }


  generateReport(){
    this.adhServ.generateReport(this.id).subscribe(
      (adherent) => {
        this.toastr.success("Informations are successfully exported")
        },(error) => {
          this.toastr.warning("Informations are Not  exported")
        }
    );
  }

}
