import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';
@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  url = 'http://localhost:5000/chats/';
  urlSend = 'http://localhost:5000/updatechat/';
  person1;
  person2;
  setChatPerson(user: string){
    this.person2 = user;
    this.person1 = this.userService.getName();
  }
  getMessagesHttp(){
    return this.http.get(this.url + this.person1 + '/' + this.person2);
  }
  sendMessage(msg: string){
    const data = {sender: this.person1, message: msg};
    this.http.post(this.urlSend + this.person1 + '/' + this.person2, data).subscribe();
  }
  constructor(private http: HttpClient, private userService: UsersService) { }
}
