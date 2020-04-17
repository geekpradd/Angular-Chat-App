import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
import { interval, Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  subscription: Subscription;
  source = interval(1000);
  name = '';
  users: string[] = [];
  constructor(private service: UsersService, private router: Router) { }

  ngOnInit() {
    this.name = this.service.getName();
    if (this.name === ''){
      this.router.navigateByUrl('/sign-in');
    }
    this.subscription = this.source.subscribe(val => this.updateUsers());
  }

  updateUsers() {
    this.users = this.service.getUsers();
  }
}
