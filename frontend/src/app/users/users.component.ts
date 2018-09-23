import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from './users.model';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {

  userModel = new User();
  userform: FormGroup;
  userList;
  dataSource = new MatTableDataSource();
  showLabel: boolean = false;
  displayedColumns = ['login', 'score'];
  totalCount:number;

  constructor(private http: HttpClient,
              private _router: Router) { }

  ngOnInit() {
    this.userform = new FormGroup
    ({
        name: new FormControl()
    });
  }

  search(){
    if(this.userModel.name==="" || this.userModel.name==undefined){
      alert("Please enter search criteria");
    }
    else{
      this.totalCount = 0;
      this.userList = null;
      let tempList = [];
      this.http
              .get("https://api.github.com/search/users?q="+this.userModel.name).subscribe(
                result=>{
                  this.userList = result;
                  this.totalCount = this.userList.total_count;
                  for(let i = 0; i < 10; i++){
                    tempList[i] = this.userList.items[i];
                  }
                  this.dataSource = new MatTableDataSource(tempList);
                  this.showLabel = true;
                },
                error=>{
                  alert("API not available");
                })
    }
  }

  viewUser(login){
    this._router.navigate(["/users-profile",{login:login}]);
  }

}
