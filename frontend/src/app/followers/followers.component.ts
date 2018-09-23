import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare let d3: any;
declare let $: any;

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  usersList=[];
  
  public colors = ['red', 'green', 'blue'];
  public dataColumns = [1];
  public barChartData = [];
  showChart:boolean=false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http
            .get("http://localhost:4000/api/users").subscribe(
              result=>{
                this.usersList = JSON.parse(JSON.stringify(result));
                for(let i = 0; i < 10; i++){
                    this.barChartData.push({
                      id: i,
                      label: this.usersList[i].login,
                      value1: this.usersList[i].followers,
                    });
                  }
                this.showChart=true;
              },
              error=>{
                alert("API not available");
              })
  }

}
