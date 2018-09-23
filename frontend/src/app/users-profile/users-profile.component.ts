import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsersProfile } from './users-profile.model';

@Component({
  selector: 'app-users-profile',
  templateUrl: './users-profile.component.html',
  styleUrls: ['./users-profile.component.css']
})
export class UsersProfileComponent implements OnInit {

  userProfile;
  usersProfileModel = new UsersProfile();

  constructor(private _activatedRoute: ActivatedRoute, private _route: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http
            .get("https://api.github.com/users/"+this._activatedRoute.snapshot.params.login).subscribe(
              result=>{
                this.userProfile=result;
                this.usersProfileModel.login = this.userProfile.login;
                this.usersProfileModel.followers = this.userProfile.followers;
                this.usersProfileModel.following = this.userProfile.following;
                this.usersProfileModel.repos_url = this.userProfile.repos_url;
                this.usersProfileModel.blog = this.userProfile.blog;
                this.usersProfileModel.avatar_url = this.userProfile.avatar_url;
    this.http
              .post("http://localhost:4000/api/insertUsers",JSON.stringify(this.usersProfileModel),{headers:new HttpHeaders({ 'Content-Type': 'application/json' })}).subscribe(
                result=>{
                  console.log(result);
                },
                error=>{
                  console.log(error);
                })
      },
              error=>{
                alert("API not available");
              })
  }

  back(){
    this._route.navigate(["/users"]);
  }

}
