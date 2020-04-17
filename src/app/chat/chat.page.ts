import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ChatsService } from '../chats.service';
import { interval, Subscription } from 'rxjs';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  other: string;
  constructor(private route: ActivatedRoute, private chatService: ChatsService, private userService: UsersService, private router: Router) { }
  chats;
  messages;
  chatText: string;
  subscription: Subscription;
  source = interval(1000);

  ngOnInit() {
    const me = this.userService.getName();
    if (me === ''){
      this.router.navigateByUrl('/sign-in');
    }
    this.other = this.route.snapshot.paramMap.get('user');
    this.chatService.setChatPerson(this.other);
    this.updateChats();
    this.subscription = this.source.subscribe(val => this.updateChats());
  }
  send() {
    this.chatService.sendMessage(this.chatText);
    this.chatText = "";
  }
  updateChats(){
    this.chatService.getMessagesHttp().subscribe((data) => {
      this.chats = data['chats'];
      console.log(this.chats);
      if (Array.isArray(this.chats) && this.chats.length){
        this.messages = JSON.parse(this.chats[0].chat);
      }
    });
  }

}
