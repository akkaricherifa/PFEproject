import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/authService';
import { EntrepriseService } from '../shared/entreprise.service';
@Component({
  selector: 'app-dashboard-entreprise',
  templateUrl: './dashboard-entreprise.component.html',
  styleUrls: ['./dashboard-entreprise.component.css']
})
export class DashboardEntrepriseComponent implements OnInit {
  Entreprise!:any;
  id:any;
  constructor(private entrepriseServ: EntrepriseService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private authServ: AuthService) { }

    ngOnInit(): void {
      this. id =(localStorage.getItem('CurrentUser') || '');
      this.entrepriseServ.getEntreprise(this.id).subscribe( data => {
        console.log(data);
        this.Entreprise = data;
      })
    }
    logout(){
      this.authServ.logout()
    }
  }
