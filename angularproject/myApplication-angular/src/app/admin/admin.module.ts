import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLandingComponent } from './admin-landing/admin-landing.component';
import { Subject1Component } from './subject1/subject1.component';
import { Subject2Component } from './subject2/subject2.component';
import { Subject3Component } from './subject3/subject3.component';



@NgModule({
  declarations: [

  
    AdminLandingComponent,
        Subject1Component,
        Subject2Component,
        Subject3Component
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
