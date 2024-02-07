import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm! : FormGroup ;
  constructor(private formBuilder : FormBuilder){
}
ngOnInit(){
  this.formDetails();
}

formDetails(){
  this.signupForm = this.formBuilder.group({
    FullName:['', [Validators.required]],
    Mb:[null,[Validators.maxLength(10),Validators.pattern("^[0-9]*$")]],
    pancard:[],
    password:[],
    confirmpassword:[],
    Gender:[],
  })
}
}
