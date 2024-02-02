import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';

@NgModule({
  declarations: [    //update this when compo/directive/pipe are generate
    AppComponent,
    HomeComponent,
    DatabindingComponent 
  
  ],
  imports: [      // update import when modules are genrate
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
