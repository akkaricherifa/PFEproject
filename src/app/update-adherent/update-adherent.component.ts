import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Adhérent } from '../Model/adhérent';
import { AdherentService } from '../shared/adherent.service';

@Component({
  selector: 'app-update-adherent',
  templateUrl: './update-adherent.component.html',
  styleUrls: ['./update-adherent.component.css']
})
export class UpdateAdherentComponent implements OnInit {
  adherentForm!: FormGroup
  id:any;
  adherent: any;

  constructor(  private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private adhServ: AdherentService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.adhServ.getAdherent(this.id).subscribe(data => {
      this.adherent = data;

        this.adherentForm.patchValue({
          nom : this.adherent.nom,
          prenom : this.adherent.prenom ,
          telephone : this.adherent.telephone,
          
        })
        
      },
      err=>{
        console.log(err);
      }
    )
    }


  updateAdherent(id:any) {
    this.adhServ.updateAdherent(this.id,this.adherent).subscribe((res) => {
      this.router.navigate(['/acceuil']);
      this.toastr.success('Adhérent modifié avec succès');
    });

  }
}
