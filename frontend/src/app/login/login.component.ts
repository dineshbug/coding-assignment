import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';



import { Login } from './login.model';
import { LoginService } from './login.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  loginModel = new Login();
  userform: FormGroup;

  constructor(private loginService:LoginService) { }

  ngOnInit() {
    this.login();
    this.userform = new FormGroup
    ({
        userName: new FormControl(),
        userPassword: new FormControl()
    });
  }

  login(){
    this.loginService.login(this.loginModel).subscribe(
      result => {
        alert("Login Success");
      },
      error => {
        alert("Login Failed");
      }
    );
  }

}
