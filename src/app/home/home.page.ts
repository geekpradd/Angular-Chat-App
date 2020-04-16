import { Component, OnInit } from '@angular/core';
import {UsersService} from '../users.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  name = '';
  users: string[] = [];
  constructor(private service: UsersService) { }

  ngOnInit() {
    this.name = this.service.getName();
    this.service.getUsers().subscribe((data) => {
      this.users = data['users'];
    });
  }

}
