import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../shared/candidat.service';
import { ToastrService } from 'ngx-toastr';
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';
interface candidat {
  id:number;
  nomCan:string;
  prenomCan:string;
  emailCan:string;

}
@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css']
})
export class ListCandidatComponent implements OnInit {
  p : number=1;
  router: any;
  id:any;
  term!: string;
  searchTerm!: string;
  Candidat!:any;
  public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Supprimer ce Candidat ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;

  constructor( private candidatServ: CandidatService,
    private toastr: ToastrService,
    private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<candidat[]>('./assets/data/countries.json')
    .subscribe((data: candidat[]) => {
      this.Candidat = data;
    });
    this.affiche();
    this.candidatServ.getCandidat(this.id).subscribe( data => {
      console.log(data);
      this.Candidat = data;
    }) 
  }


  affiche(){
    this.candidatServ.getAllCandidat().subscribe(
      res=>{
        this.Candidat=res
      },
    )
  }

  delete(id:any){
    this.candidatServ.deleteCandidat(id).subscribe( data => {    
    this.affiche()
     this.toastr.success("candidat supprimé avec succes")
    this.router.navigate(['/list-candidat']);  
    },
    )
  }
  onUpload(event:any){
    let file: File
    let fd = new FormData()
    file = <File> event.target.files[0];
    fd.append('file', file, file.name)
    this.candidatServ.uploadFile(fd).subscribe((res: any) => {
      console.log(res);
      
      }, (err)=>{
        console.log(err); 
      })
      }


  downloadfile(){
    this.candidatServ.getFile().subscribe(data=>{
    let downloadURL = window.URL.createObjectURL(data);
    saveAs(downloadURL);
    })
    }
  
  }
  


