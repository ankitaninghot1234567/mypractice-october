import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 @Input() cityFromParent:any;
@Output() dataFromchild = new EventEmitter<any>();

 state="MH27";

 dataFromchildParent(){
  this.dataFromchild.emit(this.state);
 }
}
