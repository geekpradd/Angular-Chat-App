import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router, private service: UsersService) { }

  ngOnInit() {
    this.service.setName('');
    localStorage.removeItem('loggedInUser');
    this.router.navigateByUrl('/sign-in');
  }


}
