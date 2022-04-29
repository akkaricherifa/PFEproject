import { Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, VERSION, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  dynamicArray : any[] = [];
  newDynamic:any;
  index:any;


  constructor() { }
  addRow() {
    this.dynamicArray.push({ nomCompetence: '', Niveau: '' });
    console.log('New row added successfully', 'New Row');
  }
  deleteRow(index:any) {
    this.dynamicArray.splice(index, 1);
  }
  getValues() {
    console.log(this.dynamicArray);
  }
  
 


  ngOnInit(): void {
   
  }

}
