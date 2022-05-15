import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdherentService } from '../shared/adherent.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  adherentForm!: FormGroup
  constructor(  private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private adhServ: AdherentService) { }
  ngOnInit(): void {
    this.adherentForm= this.fb.group ( 
      {
        email:['',Validators.required],
        password:['',Validators.required],
        CIN:['',Validators.required],
        nom:['',Validators.required],
        prenom:['',Validators.required],  
        civilite:['',Validators.required],
        niveau:['',Validators.required],
        profession:['',Validators.required],
        cycle:['',Validators.required],
        etablissement:['',Validators.required],
        telephone:['',Validators.required],
        specialite:['',Validators.required],
      }

    )
  }


  createAdherent() {
    this.adhServ.createAdherent(this.adherentForm.value).subscribe((res) => {
      this.router.navigate(['/acceuil']);
      // this.toastr.success('Adhérent Ajouté avec succès');
     
    });
    console.log(this.adherentForm.value);
  }
  

   opensweetalert() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Your Registration has been saved',
      showConfirmButton: false,
      timer: 3500
    })
   }
}
