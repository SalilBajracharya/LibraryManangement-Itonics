import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private toastr: ToastrService, private router: Router){}

  loginForm = new FormGroup({
    userName : new FormControl(''),
    password : new FormControl('')
  });

  Validate(){
    var defaultData = JSON.parse(localStorage.getItem("studentData")!);
    var username = this.loginForm.value.userName;
    var password = this.loginForm.value.password;

    if(username == "" || password == "")
    {
      this.toastr.error("Validation Error", "Fields cannot be null")
    }

    if(username != defaultData.userName)
    {
      this.toastr.error("Validation Error", "Invalid UserName")
    }else if(password != defaultData.password)
    {
      this.toastr.error("Validation Error", "Invalid Password")
    }

    if(username == defaultData.userName && password == defaultData.password)
    {
        this.toastr.success("Success", "Successfully logged in.");
        this.router.navigate(['/books'])
    }
  }
 }
