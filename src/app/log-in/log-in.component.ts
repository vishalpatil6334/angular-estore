import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../share-service/user.service';
import { AuthService } from '../share-service/auth.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  isSubmitted  =  false;
  return: string = '';
  login_form:FormGroup=new FormGroup({
    
    email:new FormControl('',[Validators.required]),
     password:new FormControl('',Validators.required),
 })
 

 constructor(private router :Router,private authService: AuthService,private route: ActivatedRoute) { }

 ngOnInit() {
 
    let local = this.authService.isLoggedIn();
    if(local !== null){
      this.router.navigate(['/sidenav']);
    }
}


  signIn(){
  
    
  var email= this.login_form.controls['email'].value;
  var password= this.login_form.controls['password'].value;
    this.isSubmitted = true;
  
    //if (email=='admin' && password=='admin'){
    this.authService.signIn(this.login_form.value);
    console.log(this.login_form.value)
    
    this.router.navigateByUrl('/sidenav');
    //}
   // else{
     // alert('Username and password is not authenticated...!!');
    //}
  }

}
