import { Component } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {

  isShowPass = false;

  defaltvalue = "ankita"

  Login(data: any) {
    console.log(data);
   let username = data.Uname.replace(/\s+/g, ' ');
  console.log(username);

  let request ={
    "UserName": username,
    "PassWord" : data.password

  }
  
  }

  toShowPassword() {
    this.isShowPass = !this.isShowPass;
  }


}
