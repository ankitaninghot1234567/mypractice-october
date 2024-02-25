import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApicallService } from 'src/app/apicall.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm! : FormGroup ;
  visible=false;
  visible1=false;
  isMatch =false;
  
  constructor(private formBuilder : FormBuilder,private apicallService:ApicallService, private router:Router){
}
ngOnInit(){
  this.formDetails();
}

formDetails(){
  this.signupForm = this.formBuilder.group({
    FullName:['',  [Validators.required, this.whiteSpaceRemoveValidator]],
    Mb:[null,[Validators.maxLength(10),Validators.pattern("^[0-9]*$"),Validators.minLength(10),Validators.required]],
    pancard:['',[Validators.pattern("[A-Za-z0-9]+"),Validators.required]],
    password:[],
    confirmpassword:[],
    Gender:[],
    tc:[true,[Validators.requiredTrue]]
    })
}
visiblePassword(){
  this.visible= !this.visible;
}
visiblePassword1(){
   this.visible1=!this.visible1
}
passMatch(){
  if(this.signupForm.value.confirmpassword !=null){
 if( this.signupForm.value.password == this.signupForm.value.confirmpassword){
   this.isMatch=false
  }  else{
  this.isMatch=true;
  }
}
}
submit(){
  console.log(this.signupForm.value,this.signupForm.value);
  this.apicallService.postApilcall(this.signupForm.value).subscribe(repose=>{})
  this.router.navigateByUrl("/user/userSucc")
  
}

whiteSpaceRemoveValidator(inputBoxValue:any){
  console.log('inp val',inputBoxValue);
 let spaceInclude = inputBoxValue?.value?.includes('  ')
 return spaceInclude ? {'whiteSpaceError':true} :null
} 
}
