import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { AdherentService } from '../shared/adherent.service';
import { AdminService } from '../shared/admin.service';
import { AuthService } from '../shared/authService';
import { EntrepriseService } from '../shared/entreprise.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sidebar-entreprise',
  templateUrl: './sidebar-entreprise.component.html',
  styleUrls: ['./sidebar-entreprise.component.css']
})
export class SidebarEntrepriseComponent implements OnInit {
id:any;
closeResult = '';
Entreprise!:any;
  constructor(
    private router:Router, 
    private fb: FormBuilder,
    private entrepriseServ: EntrepriseService,
    private authServ: AuthService,
    private route: ActivatedRoute,
    private modalService: NgbModal,

  ) { }

  ngOnInit(): void  {
     
    this.id =(localStorage.getItem('CurrentUser') || '');
    console.log("id entreprise ",this.id);
    
    
    this.entrepriseServ.getEntreprise(this.id).subscribe( data => {
      // console.log(data);  
      this.Entreprise = data;
    })}



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
  logout(){
    this.authServ.logout()
  }
}
