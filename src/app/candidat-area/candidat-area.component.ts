import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UploadFile } from 'ngx-awesome-uploader/lib/file-drop';
import { ToastrService } from 'ngx-toastr';
import { CandidatService } from '../shared/candidat.service';

@Component({
  selector: 'app-candidat-area',
  templateUrl: './candidat-area.component.html',
  styleUrls: ['./candidat-area.component.css']
})
export class CandidatAreaComponent implements OnInit {

candidatForm!: FormGroup;
event:any;
  file: any;
  url: any;
  data:any;



  constructor(
    private candidatServ: CandidatService,
    private router: Router,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private http:HttpClient
  ) { }

  ngOnInit(): void {

    this.candidatForm= this.fb.group(
      {
        nomCan:['',[Validators.required,Validators.minLength(3)]],
        prenomCan:['',[Validators.required,Validators.minLength(3)]],
        dateOfBirth:['',Validators.required],
        phoneCan:['',Validators.required],
        emailCan:['',Validators.required],
        password:['',Validators.required],
        ville:['',Validators.required],
        file:['',Validators.required],
        pathMotivationLetter:['',Validators.required],
        niveauEtud:['',Validators.required],
        titreDiplome:['',Validators.required],
        university:['',Validators.required],
        niveauExp:['',Validators.required],
        experience:['',Validators.required]


      }

    )
  }

  onUpload(event:any){
let file: File
let fd = new FormData()
file = <File> event.target.files[0];
fd.append('file',file,file.name)
this.candidatServ.uploadFile(fd).subscribe((res: any) => {
  console.log(res);
  }, (err)=>{
    console.log(err); 
  })
  }
 
// onUpload(event:any) {
//     if (event.target.files && event.target.files[0].file.name) {
//       var reader = new FileReader();

//       reader.readAsDataURL(event.target.files[0]); // read file as data url

//       reader.onload = (event:any) => { // called once readAsDataURL is completed
//         this.url = event.target.result;
//       }
//     }
//   }

  createCandidat() {
    this.candidatServ.createCandidat(this.candidatForm.value).subscribe((res) => {
      this.router.navigate(['/reponse-candidat']);
    
    });
    console.log(this.candidatForm.value);
  }
 

}
