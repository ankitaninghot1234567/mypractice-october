import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent {
infopipes='aaa bbb ddd fff mmm nnnnn';


//date=new Date();

date1 =new Date();

inputboxValue:any='';
tableData=[
  {name :'ankita',
   contact :44575,
  city: 'pune'},

  {name :'anurag',
   contact :44572225,
  city: 'mumbai'},

  {name :'poonam',
   contact :44757775,
  city: 'noida'},
  
  {name :'Poonam',
  contact :44575,
 city: 'pune'},
 
 {
  name :'Ankita',
   contact :44575,
  city: 'Pune'
 }

]
}
