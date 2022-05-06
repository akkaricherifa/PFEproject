import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, RouterLink } from '@angular/router';
import {  CalendarOptions } from '@fullcalendar/angular';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import dayGridView from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import { Formation } from '../Model/formation';
import { ToastrService } from 'ngx-toastr';
import { FormationService } from '../shared/formation.service';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { isExpressionFactoryMetadata } from '@angular/compiler/src/render3/r3_factory';

@Component({
  selector: 'app-plan-formation',
  templateUrl: './plan-formation.component.html',
  styleUrls: ['./plan-formation.component.css']
})
export class PlanFormationComponent implements OnInit {
  @ViewChild ('content') content:any
  formationForm!: FormGroup;
  dateDebut:any;
   a:any=[]
   b:any=[]
   d:any
   month :any;
   year :any;
   day:any
   r:any
   t:any=[]
  event:any=[]
   CalendarOptions!:any;
    closeResult = '';
   
  constructor(private router:Router , private modalService: NgbModal,
    private formationServ: FormationService,  private toastr: ToastrService, 
    private fb: FormBuilder,) { }

    ngOnInit(): void {
      this.formationServ.getAllFormation().subscribe((res:any)=>{
        this.event=res
        this.event.forEach((element:any) => {
          this.a.push(element.title)
          
        });
        this.event.forEach((element:any) => {
          this.b.push(new Date(element.date_debut))
          
        });

        this.CalendarOptions = {
            initialView: 'dayGridMonth',
           dateClick: this.handleDateClick.bind(this), 
          eventClick: this.eeventClick.bind(this), 
            // events:this.event.map((item:any)=>item.title),
       ///////////////////////////// star hedha ki n5alih tetna7a el Modal 61 w 62//////////////////////////////////////////////////     
            // events:this.event.array.forEach((element:any) => {
            //   [{title:element.title,date:element.date_debut}]
              
            // })

              
              // [
                
              // {title:this.a[1], date:'2022-05-03' }]
              // {title:"java", date:Date.now()}]
              //  {title:this.a[4], date:this.b[4]},{title:this.a[3], date:this.b[3]}]

            
          // events: [
          //   { title: 'event 5000000', date: '2022-04-25',formateur:"bedis",formateur2:"aziz",dateFin:'2022/02/10' },
          //   { title: 'event 500005', date: '2022-04-01',formateur:"bedis",formateur2:"aziz",dateFin:'2022/02/10' },
          //   { title: 'event 200', date: '2022-04-25',formateur:"bedis",formateur2:"aziz",dateFin:'2022/02/10' },
          //   { title: 'event 2', date: '2022-04-20' }
          // ]
        };

        // console.log("helloooo",this.event);
        // this.a=(this.event.map((item:any)=>item.nomformation));
        this.event.forEach((element:any) => {
          this.a.push(element.nomformation)
          
        });
        this.event.forEach((element:any) => {
          this.b.push(new Date(element.date_debut))
          
        });
        // console.log("goaal",this.b[3]);
        // console.log("bbbbbb",this.b[3]);
        
        
        // this.d=(this.b[3])
        // console.log("hhhhhhhh",new Date(this.b[3]).getMonth()+1);
        // console.log("hhhhhhhh",new Date(this.b[3]).getFullYear())
        // console.log("hhhhhhhh",new Date(this.b[3]). getDate())
        // this.d=this.b[3]
        
        // this.year=(this.d.getFullYear());
        // this.month=(this.d.getMonth()+1);
        // this.day=(this.d.getDate())
        // this.d=new Date(this.b[3].getFullYear(),this.b[3].getMonth()+1,this.b[3].getDate())
        // console.log("bonjour",this.year);
        // console.log("bonjour",this.month);
        // console.log("bonjour",this.day);
        
        //  this.r=new Date().getTime()
        //  let test = this.r.getTime()-this.t

        //  console.log("test",this.r,this.t.getTime());

        //  let diff=this.r -this.t.getTime()

        //  this.y=new Date(diff)

      })

      // this.a=this.event
      console.log("helloooo",this.a);
      console.log("hel",this.a[3]);

      this.formationForm= this.fb.group(
        {
          title:['',[Validators.required,Validators.minLength(3)]], 
          date_fin:['',Validators.required],
          duree:['',Validators.required],
          formateur:['',Validators.required],
          prix:['',Validators.required],
          lieu:['',Validators.required],
        }
  
      )
    }
    

  
  handleDateClick(arg:any) {
    console.log(arg);
    this.dateDebut=arg.dateStr;
     this.open(this.content)
    this.eeventClick(arg)
    
   
  }
  eeventClick(model:any){
    console.log(model.event._def.title);
    console.log(model.event._def.extendedProps.formateur);
    console.log(model.event._def.extendedProps.formateur2);
    console.log(model.event._def.extendedProps.dateFin);
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
  

  createFormation() {
    let title=this.formationForm.controls.title.value;
    let date_fin=this.formationForm.controls.date_fin.value;
    let duree=this.formationForm.controls.duree.value;
    let formateur=this.formationForm.controls.formateur.value;
    let prix=this.formationForm.controls.prix.value;
    let lieu=this.formationForm.controls.lieu.value;
    let date_debut=this.dateDebut
    let form ={title, date_debut,date_fin,duree,formateur,prix,lieu}
    this.formationServ.createFormation(form).subscribe((res) => {
      this.router.navigate(['/plan-formation']);
      this.toastr.success('formation ajoutée avec Succès');
    });
    console.log();
  }
}
  

