import { Component, ComponentFactoryResolver, ElementRef, OnInit, Renderer2, VERSION, ViewChild, ViewContainerRef } from '@angular/core';
import { DynamicComponent } from '../dynamic/dynamic.component';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef })
  container!: ViewContainerRef;

  private _counter = 1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  add(): void {

    // create the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(DynamicComponent);

    // add the component to the view
    const componentRef = this.container.createComponent(componentFactory);

    // pass some data to the component
    //componentRef.instance.index = this._counter++;
  }


  ngOnInit(): void {
   
  }

}
