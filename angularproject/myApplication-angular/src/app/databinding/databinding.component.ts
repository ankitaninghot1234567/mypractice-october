import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  title = 'myApplication-angular';


//propertyName : data type = value;

  a=100;
  b : number =200;
  c! : number;  // c! make porperty optional
   city : string= "pune";
   myName = "ankita"
   pincode ="7756837334"
   isdisable= false
    fruit!: string;
    favFruit = "mango";


   constructor() {}
   submit(){ 
    this.fruit ="mango"

   }

}
