import { Component, OnInit ,ViewChild} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdherentService } from '../shared/adherent.service';
import { AuthService } from '../shared/authService';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  closeResult = '';
  Adherent!: any;
  id:any;

  constructor( private route : ActivatedRoute,
    private adhServ: AdherentService ,
    private authServ: AuthService,
    private modalService: NgbModal,) { }

  ngOnInit(): void {
    this. id =(localStorage.getItem('CurrentUser') || '');
    this.adhServ.getAdherent(this.id).subscribe( data => {
      console.log(data);
      this.Adherent = data;
    })
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
  logout(){
    this.authServ.logout()
  }
 
}
  
  