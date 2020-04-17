import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = 'http://localhost:5000/users/';
  name = '';
  users = [];
  subscription: Subscription;
  source = interval(4000);

  setName(data: string){
    this.name = data;
    console.log(this.users);
    console.log(this.name);
    const names = [];
    this.users.forEach( (element) => {
      names.push(element.username);
    });
    if (!names.includes(this.name)){
      this.http.post(this.url, {username: this.name}).subscribe();
    }  
  }
  getName(): string {
    return this.name;
  }
  getUsers(): string[] {
    return this.users;
  }
  updateUsers(){
    this.http.get(this.url).subscribe((data) => {
      this.users = data['users'];
    });
  }
  constructor(private http: HttpClient) { 
    this.updateUsers();
    this.subscription = this.source.subscribe(val => this.updateUsers());
  }
}
