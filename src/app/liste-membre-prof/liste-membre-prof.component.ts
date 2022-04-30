import { Component, OnInit } from '@angular/core';
import { Adhérent } from '../Model/adhérent';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from '../shared/adherent.service';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-liste-membre-prof',
  templateUrl: './liste-membre-prof.component.html',
  styleUrls: ['./liste-membre-prof.component.css']
})
export class ListeMembreProfComponent implements OnInit {

  Adherent!: any;
  id:any;

  constructor( private route : ActivatedRoute,
    private adhServ: AdherentService ) { }

    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
       
     this.adhServ.getAdherent(this.id).subscribe( data => {
       console.log(data);  
       this.Adherent = data;
     })
     }
}
