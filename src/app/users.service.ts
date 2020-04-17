import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, Subscription } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  url = environment.URL + '/users/';
  signin = environment.URL + '/signin';
  signup_url = environment.URL + '/signup';
  name = '';
  users = [];
  subscription: Subscription;
  source = interval(4000);

  login(user: string, pass: string){
    return this.http.post(this.signin, {username: user, password: pass});
  }
  signup(user: string, pass: string) {
    return this.http.post(this.signup_url, {username: user, password: pass});
  }
  getName(): string {
    return this.name;
  }
  setName(data: string){
    localStorage.setItem('loggedInUser', data);
    this.name = data;
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
    const data = localStorage.getItem('loggedInUser');
    if (data===null){
      this.name = ''; 
    }
    else {
      this.name = data;
    }
    this.updateUsers();
    this.subscription = this.source.subscribe(val => this.updateUsers());
  }
}
