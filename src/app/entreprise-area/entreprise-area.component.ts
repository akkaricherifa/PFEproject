import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidatService } from '../shared/candidat.service';
import { EntrepriseService } from '../shared/entreprise.service';

@Component({
  selector: 'app-entreprise-area',
  templateUrl: './entreprise-area.component.html',
  styleUrls: ['./entreprise-area.component.css']
})
export class EntrepriseAreaComponent implements OnInit {

  form: any = {};
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  entrepriseForm!: FormGroup



  constructor(
    private entrepriseServ: EntrepriseService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.entrepriseForm= this.fb.group(
      {
        nomEnt:['',[Validators.required,Validators.minLength(3)]],
        nomResp:['',[Validators.required,Validators.minLength(3)]],
        emailEnt:['',Validators.required],
        telEnt:['',Validators.required],
        password:['',Validators.required],
        adresse:['',Validators.required],


      }

    )
  }
  createEntreprise() {
    this.entrepriseServ.createEntreprise(this.entrepriseForm.value).subscribe((res) => {
      this.router.navigate(['/acceuil']);
      this.toastr.success('Entreprise ajouté avec succès');
    });
    console.log(this.entrepriseForm.value)
  }
 
}
