import { Component } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent {  
  showDiv : boolean=true;
listItem = ['coffee','milk','water','sugar','tea','ponds','maggi','chocolet'];
 
color ='black';



  toggle(){
    this.showDiv=!this.showDiv;
     
  }

}
