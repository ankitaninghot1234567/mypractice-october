import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-sucess',
  templateUrl: './user-sucess.component.html',
  styleUrls: ['./user-sucess.component.css']
})
export class UserSucessComponent {
  name : any;
  constructor(private dataService:DataService, private router : Router){}

ngOnInit(){
  this.name= this.dataService.userName;
}
}
