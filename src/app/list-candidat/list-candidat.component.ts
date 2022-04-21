import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../shared/candidat.service';
import { ToastrService } from 'ngx-toastr';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-list-candidat',
  templateUrl: './list-candidat.component.html',
  styleUrls: ['./list-candidat.component.css']
})
export class ListCandidatComponent implements OnInit {
  p : number=1;
  router: any;
  id:any;
  Candidat!:any;
  public popoverTitle:string=' Alert De Confirmation';
  public popoverMessage:string='Voulez Vous vraiment Supprimer ce Candidat ?';
  public confirmClicked:boolean=false;
  public cancelClicked:boolean=false;
  constructor( private candidatServ: CandidatService,
    private toastr: ToastrService,) { }

  ngOnInit(): void {
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


  getfile(){
    this.candidatServ.getFile().subscribe(data=>{
    let downloadURL = window.URL.createObjectURL(data);
    saveAs(downloadURL);
    })
    }
  
  }
  


