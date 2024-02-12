import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sucess',
  templateUrl: './user-sucess.component.html',
  styleUrls: ['./user-sucess.component.css']
})
export class UserSucessComponent {
  name : any;
  constructor(private dataService:DataService, private router : Router){}

ngOnInit(){
  this.name= this.dataService.UserName;
}
}
