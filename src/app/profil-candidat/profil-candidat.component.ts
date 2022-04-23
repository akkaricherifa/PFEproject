import { Component, OnInit } from '@angular/core';
import { CandidatService } from '../shared/candidat.service';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../shared/admin.service';
@Component({
  selector: 'app-profil-candidat',
  templateUrl: './profil-candidat.component.html',
  styleUrls: ['./profil-candidat.component.css']
})
export class ProfilCandidatComponent implements OnInit {
  candidate!: any;
  id:any;

  constructor(private candidatServ: CandidatService,
    private route: ActivatedRoute,
    private adminServ: AdminService) { }

    
    ngOnInit(): void {
      this.id=this.route.snapshot.params['id'];
       
     this.candidatServ.getCandidat(this.id).subscribe( data => {
       console.log(data);  
       this.candidate = data;
     })
     }
  
    //  sendConfirmMail(mail:any) {
    //   this.adminServ.sendConfirmMail(mail).subscribe(  (candidate) => {
    //     this.adminServ.toastrMessage("Email sent successffully")
    //   },(error) =>{
      
    //   }
    //   );
      
    // };

  
    }

