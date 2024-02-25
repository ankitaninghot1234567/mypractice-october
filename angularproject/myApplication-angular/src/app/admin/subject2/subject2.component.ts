import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component {
stdData1 :any;
  constructor(private dataService:DataService){}
ngOnInit(){
  this.dataService.studentData.subscribe(data =>{ 
    this.stdData1 = data})
}
}
