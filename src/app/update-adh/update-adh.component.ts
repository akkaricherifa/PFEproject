import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Adhérent } from '../Model/adhérent';
import { AdherentService } from '../shared/adherent.service';
import { AuthService } from '../shared/authService';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-adh',
  templateUrl: './update-adh.component.html',
  styleUrls: ['./update-adh.component.css']
})
export class UpdateAdhComponent implements OnInit {
  adherentForm!: FormGroup
  id:any;
  adherent: any;

  Adherent!: any;
  Admin:any;

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
        this.Adherent = data;   
        },
        err=>{
          console.log(err);
        }
      )
      // this. id =(localStorage.getItem('CurrentUser') || '');
      this.adhServ.getAdherent(this.id).subscribe( data => {
        console.log(data);
        this.adherent = data;
      })
    }
    update(){
      
      this.adhServ.updateAdherent(this.id,this.adherent).subscribe( data => {

       this.router.navigate(['/list-adherent']);
      },(error)=>{
        console.log(error);
      });
   }
   opensweetalert() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Adhérent Modifié avec Succès',
    showConfirmButton: false,
    timer: 3000
  })
 }

}
