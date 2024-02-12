import { Component } from '@angular/core';
import { DataService } from 'src/app/user/data.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component {
student = 'ankita ninghot kale';

constructor(private dataService : DataService){}
  sub1(){
    this.dataService.studentData.next(this.student);

  }
}
