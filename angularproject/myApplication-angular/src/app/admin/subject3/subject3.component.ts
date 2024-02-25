import { Component } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-subject3',
  templateUrl: './subject3.component.html',
  styleUrls: ['./subject3.component.css']
})
export class Subject3Component {
sdtData2 :any;
constructor(private dataService:DataService){}
ngOnInit(){
  this.dataService.studentData.subscribe(data=>{
    this.sdtData2 = data
  })
}
}
