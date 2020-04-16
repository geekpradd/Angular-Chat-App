import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:5000/users/';
  name = '';
  setName(data: string){
    this.name = data;
    return this.http.post(this.url, {username: this.name});
  }
  getName(): string {
    return this.name;
  }
  getUsers(){
    return this.http.get(this.url);
  }
  constructor(private http: HttpClient) { }
}
