import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {
  heading: string = "Welcome";
  hide: boolean = true
  loginUser: FormGroup;
  
  constructor(private fb: FormBuilder, public router: Router, private toastr: ToastrService) {
    this.loginUser = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }
  createNewTask() {
    const data = this.loginUser.value
    if (data.username == 'test' && data.password == 'test1') {
      this.router.navigate(['/dashboard'])
      this.toastr.success('Login Successfully!');
    }else{
      this.toastr.error('Wrong credential!')
    }
  }
}
