import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login } from './login.model';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  defaultHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) { }

  login(userLogin : Login) {
    console.log(userLogin);
    return this.http
            .get("http://localhost:4000/auth/google", { headers: this.defaultHeaders })
  }

}
