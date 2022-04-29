import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  heading:string = "Welcome";
  hide:boolean=true
  loginUser!:FormGroup;
  constructor(private fb:FormBuilder) {
    this.loginUser = this.fb.group({
      Username : ['',Validators.required],
      password : ['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  createNewTask(){
    
  }
}
