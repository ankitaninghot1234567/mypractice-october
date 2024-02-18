import { Component, ElementRef, ViewChild } from '@angular/core';
import { ViewChild2Component } from '../view-child2/view-child2.component';

@Component({
  selector: 'app-view-child1',
  templateUrl: './view-child1.component.html',
  styleUrls: ['./view-child1.component.css']
})
export class ViewChild1Component {
 name : any
 @ViewChild(ViewChild2Component) viewchild2comp ! : ViewChild2Component;
 @ViewChild ('divcontainer') eleRef! : ElementRef


 getData(){
this.name=this.viewchild2comp.cityname
 }


 ngAfterViewInit(){

  this.eleRef.nativeElement.innerHTML =
  'ankita live in pune ';
 }
}
