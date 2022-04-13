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
    private adhServ: AdherentService ) { }

  ngOnInit(): void {
   
    // this. id =(localStorage.getItem('CurrentUser') || '');
    // this.adhServ.getAdherent(this.id).subscribe( data => {
    //   console.log(data);
    //   this.Adherent = data; 
    // })
  //   this. id =(localStorage.getItem('' ) || '');
  // this.adhServ.getAdherent(this.id).subscribe( data => {
  //   console.log(data);  
  //   this.Adherent = data;
  // })
  // }

}
}
