import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  constructor(private dataService:DataService, private router : Router){}

  isShowPass = false;

  defaltvalue = "ankita"

  Login(data: any) {
    console.log('data', data); 

   let username = data.Uname.replace(/\s+/g, ' ');
  //console.log(username);

  this.dataService.userName=data.Uname//ankita
  this.router.navigateByUrl('/user/userSucc');


  let request ={
    "UserName": username,
    "PassWord" : data.password

  }
  
  }

  toShowPassword() {
    this.isShowPass = !this.isShowPass;
  }


}
