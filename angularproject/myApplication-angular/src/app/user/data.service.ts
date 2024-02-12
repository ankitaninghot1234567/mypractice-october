import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
UserName:any;

studentData = new Subject<any>();
  constructor( ) { }
}
