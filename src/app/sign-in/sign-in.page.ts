import { Component, OnInit } from '@angular/core';
import {NavController, NavParams} from '@ionic/angular';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {
  name: string;
  password: string;

  login(): void {
    this.service.login(this.name, this.password).subscribe((data) => {
      const status = +data['code'];
      if (status === 0){
        this.service.setName(this.name);
        this.router.navigateByUrl('/home');
      }
      else if (status === 1){
        alert("Username does not exist");
      }
      else {
        alert("Password incorrect");
        this.password = '';
      }
    });
    
  }

  constructor(private service: UsersService, private router: Router) { }

  ngOnInit() {
    if (this.service.getName() !== ''){
      this.router.navigateByUrl('/home');
    }

  }

}
