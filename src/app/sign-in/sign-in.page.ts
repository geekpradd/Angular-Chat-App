import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import {Router} from '@angular/router';
import {UsersService} from '../users.service';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  name: string;

  login(): void {
    this.service.setName(this.name);
    this.router.navigateByUrl('/home');
  }

  constructor(private service: UsersService, private router: Router) { }

  ngOnInit() {
  }

}
