import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions;
  constructor(private http:HttpClient) { }

  getUserImages():Observable<Object>{
    return this.http.get("http://localhost:8889/open-api/ufiles");
  }
  storeUser(obj):Observable<object>{
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
    return this.http.post("http://localhost:8889/open-api/register",obj,this.httpOptions);
  }
}
