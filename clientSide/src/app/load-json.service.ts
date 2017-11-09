import { Injectable, OnInit } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class LoadJsonService implements OnInit{
 obs:Observable<Response[]>;
  constructor(private http:Http) { }

  test():Observable<Response[]>{
   this.obs = this.http.get('/server/blogContents/posts.json') //../assets/json/test.json
           .map(response => {             
             return response.json() 
            })
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  //  this.obs.subscribe((val)=>{
  //   console.log(val);
  // })
    return this.obs; 
  }
  ngOnInit(){


  }




}
