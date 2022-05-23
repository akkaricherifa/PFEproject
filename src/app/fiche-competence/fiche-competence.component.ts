import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdherentService } from '../shared/adherent.service';

@Component({
  selector: 'app-fiche-competence',
  templateUrl: './fiche-competence.component.html',
  styleUrls: ['./fiche-competence.component.css']
})
export class FicheCompetenceComponent implements OnInit {
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
}
