import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Adhérent } from '../Model/adhérent';
import { AdherentService } from '../shared/adherent.service';
import { AuthService } from '../shared/authService';

@Component({
  selector: 'app-update-adherent',
  templateUrl: './update-adherent.component.html',
  styleUrls: ['./update-adherent.component.css']
})
export class UpdateAdherentComponent implements OnInit {
  adherentForm!: FormGroup
  id:any;
  adherent: any;

  Adherent!: any;


  constructor(  private route: ActivatedRoute,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private adhServ: AdherentService,
    private authServ: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.adhServ.getAdherent(this.id).subscribe(data => {
      this.adherent = data;

        // this.adherentForm.patchValue({
        //   nom : this.adherent.nom,
        //   prenom : this.adherent.prenom ,
        //   telephone : this.adherent.telephone,
        //   profession:this.adherent.profession,
        //   email:this.adherent.email,
        //   cycle:this.adherent.cycle,
        //   niveau:this.adherent.niveau,
        //   etablissement: this.adherent.etablissement,
        //   specialite:this.adherent.specialite,
          
        // }) 
      
        
      },
      err=>{
        console.log(err);
      }
    )
    
    
    this. id =(localStorage.getItem('CurrentUser') || '');
    this.adhServ.getAdherent(this.id).subscribe( data => {
      console.log(data);
      this.Adherent = data;
    })
  }


  // updateAdherent(id:any) {
  //   this.adhServ.updateAdherent(this.id,this.adherent).subscribe(data => {
  //     this.router.navigate(['/info-adherent']);
  //     this.toastr.success('Adhérent modifié avec succès');
  //   });

  // }
  logout(){
    this.authServ.logout()
  }
  
  EditForm(){
      
    this.adhServ.updateAdherent(this.id,this.adherent).subscribe((data)=>{
      this.router.navigate(['/info-adherent']);
      this.toastr.success('Adhérent modifié avec succès');
    },(error)=>{
      console.log(error);
    });
 }

}
