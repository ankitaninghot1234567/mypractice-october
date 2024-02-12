import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

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

  this.dataService.UserName=data.Uname//ankita
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
