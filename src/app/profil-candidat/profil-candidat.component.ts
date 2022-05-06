import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../shared/candidat.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../shared/admin.service';
import { ToastrService } from 'ngx-toastr';
import { MatSnackBar ,MatSnackBarConfig ,MatSnackBarRef, SimpleSnackBar,} from '@angular/material/snack-bar';
import { style } from '@angular/animations';
@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.css']
})
export class ProfilCandidatComponent implements OnInit {
  candidate!: any;
  id:any;
  email:any;
  Color:any;
  constructor(private candidatServ: CandidatService,
    private route: ActivatedRoute,
    private adminServ: AdminService,
    private toastr: ToastrService,
    private router: Router,
    private snackBar: MatSnackBar
) { }



    ngOnInit(): void {
      
      
      this.id=this.route.snapshot.params['id'];
       
     this.candidatServ.getCandidat(this.id).subscribe( data => {
      
       this.candidate = data;
     })
     }
  
     sendMail(){
      console.log(this.candidate.emailCan);
      
      this.adminServ.sendMail({email:this.candidate.emailCan}).subscribe( (res) => {
   
       
      },(error)=>{

      });
   }

   sendDenyMail(){
    console.log(this.candidate.emailCan);
    
    this.adminServ.sendDenyMail({email:this.candidate.emailCan}).subscribe( (data) => {
      
    },(error)=>{

    });
 }

 openSnackBar(message:any, action:any){

  this.snackBar.open(message, action ,{
    duration:3000,
    panelClass:'custom-style',
    
  });

}


  
    }
