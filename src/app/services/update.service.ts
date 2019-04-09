import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private http:HttpClient) { }
  // put api service
  putdata(id,parameters){
    return this.http.put('http://localhost:3000/users/' +id, parameters);
  }
}
