import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../shared/candidat.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.css']
})
export class ProfilCandidatComponent implements OnInit {
  candidate!: any;
  id:any;

  constructor(private candidatServ: CandidatService,
    private route: ActivatedRoute,) { }

    
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
       
     this.candidatServ.getCandidat(this.id).subscribe( data => {
       console.log(data);  
       this.candidate = data;
     })
     }
  
    //  sendConfirmMsg(id) {
    //   this.candidateService.sendConfirmMessage(id).subscribe(  (candidate) => {
    //     this.userService.toastMessage("Email sent successffully")
    //   },(error) =>{
    //     this.userService.toastMessage("Email sent successffully")
    //   }
    //   );
      
    // };

    
    // sendDenyMsg(id) {
    //   this.candidateService.sendDenyMessage(id)
    //   .subscribe( (candidate) =>{
    //     this.userService.toastMessage("Email sent successffully")
    //   },(error) =>{
    //     this.userService.toastMessage("Email sent successffully")
    //   }
    //   );
     
    // };
  
    }

