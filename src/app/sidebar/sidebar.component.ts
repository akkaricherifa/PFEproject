import { Component, OnInit } from '@angular/core';
import { AdherentService } from '../shared/adherent.service';
import { AuthService } from '../shared/authService';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  
 
  constructor(private authServ: AuthService,
    private adhServ: AdherentService,) { }




    ngOnInit() {
    
      }
  
}
  
  