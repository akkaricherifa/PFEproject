import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../shared/authService';
import { EntrepriseService } from '../shared/entreprise.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-dashboard-entreprise',
  templateUrl: './dashboard-entreprise.component.html',
  styleUrls: ['./dashboard-entreprise.component.css']
})
export class DashboardEntrepriseComponent implements OnInit {
  Entreprise!:any;
  id:any;
  closeResult = '';
  constructor(private entrepriseServ: EntrepriseService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router,
    private authServ: AuthService,
    private modalService: NgbModal,) { }

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
    open(content:any) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
  
  
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
  }
