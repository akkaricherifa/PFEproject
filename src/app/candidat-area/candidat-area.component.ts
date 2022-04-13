import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CandidatService } from '../shared/candidat.service';

@Component({
  selector: 'app-candidat-area',
  templateUrl: './candidat-area.component.html',
  styleUrls: ['./candidat-area.component.css']
})
export class CandidatAreaComponent implements OnInit {

candidatForm!: FormGroup



  constructor(
    private candidatServ: CandidatService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.candidatForm= this.fb.group(
      {
        prenom:['',[Validators.required,Validators.minLength(3)]],
        nom:['',[Validators.required,Validators.minLength(3)]],
        dateOfBirth:['',[Validators.required,Validators.minLength(3)]],
        phone:['',Validators.required],
        email:['',Validators.required],
        adresse:['',[Validators.required,Validators.minLength(3)]],
        ville:['',Validators.required],
        pathCv:['',Validators.required],
        pathMotivationLetter:['',Validators.required],
        niveauEtud:['',Validators.required],
        titreDiplome:['',Validators.required],
        university:['',Validators.required],
        niveauExp:['',Validators.required],
        experience:['',Validators.required],
        archived:['',Validators.required]


      }

    )
  }

  createCandidat() {
    this.candidatServ.createCandidat(this.candidatForm.value).subscribe((res) => {
      this.router.navigate(['/reponse-candidat']);
      this.toastr.success('Candidat ajouté avec succès');
    });
    console.log(this.candidatForm.value)
  }
 
}
