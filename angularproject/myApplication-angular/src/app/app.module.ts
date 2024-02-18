import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component'
import { FormsModule } from '@angular/forms';
import { DatabindingComponent } from './databinding/databinding.component';
import { TestComponent } from './test/test.component';
import { DirectiveComponent } from './directive/directive.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { PipeComponent } from './pipe/pipe.component';
import { SearchPipe } from './search.pipe';
import { NumberOnlyDirective } from './number-only.directive';

@NgModule({
  declarations: [    //update this when compo/directive/pipe are generate
    AppComponent,
    HomeComponent,
    DatabindingComponent,
    TestComponent,
    DirectiveComponent,
    ParentComponent,
    ChildComponent,
    PipeComponent,
    SearchPipe,
    NumberOnlyDirective 
  
  ],
  imports: [      // update import when modules are genrate
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
