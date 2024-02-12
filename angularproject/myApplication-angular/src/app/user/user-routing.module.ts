import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserSucessComponent } from './user-sucess/user-sucess.component';

const routes: Routes = [ 
  {path : 'userLogin', component:UserLoginComponent},
  { path : 'signup' , component : SignUpComponent},
  {path : 'userSucc' , component: UserSucessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {

}
 

