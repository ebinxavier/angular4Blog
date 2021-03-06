import { Component, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'

import {LoadJsonService} from '../load-json.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-body', 
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  name ="Ebin";
  obs:Observable<Response[]>;
  obsJson:Observable<Response[]>;
  public latestNews:any[];
  public latestNewsCurrentPage:string="1";
  public posts:any[];

  constructor(private http:Http, private loadJson:LoadJsonService) {}
  
  ngOnInit() { 
    this.obs = this.http.get('https://api.rss2json.com/v1/api.json?rss_url=http://anweshanam.com/index.php/rss/latest&api_key=zy1xcc7cw97qyplynhusgs8rfhln6eu8clmykthx&count=100')
           .map(response => {             
             return response.json()
            })
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  this.obs.subscribe((val)=>{
    this.latestNews = val['items'];
    // console.log(this.latestNews);
  })
this.obsJson = this.loadJson.test();
this.obsJson.subscribe((val)=>{
    console.log(val);
    this.posts=val;
  })
 
}
 latestNewsClick(val:string):void{
   if(val=='>'&& parseInt(this.latestNewsCurrentPage)<5)
   this.latestNewsCurrentPage=parseInt(this.latestNewsCurrentPage)+1+"";
   else if(val=='<'&& parseInt(this.latestNewsCurrentPage)>0)
   this.latestNewsCurrentPage=parseInt(this.latestNewsCurrentPage)-1+"";
   else 
      this.latestNewsCurrentPage=val;
  }

}
