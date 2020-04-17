import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  name = '';
  password = '';

  constructor(private service: UsersService, private router: Router) { }

  signup(){
    if (this.name === ''){
      alert('Username cannot be empty');
    }
    else if (this.password === ''){
      alert('Password cannot be empty');
    }
    else {
      this.service.signup(this.name, this.password).subscribe((data) => {
        const status  = +data['code'];
        if (status === 0){
          alert('Signup successful. Login into your account');
          this.router.navigateByUrl('/sign-in');
        }
        else {
          alert('Username has been taken. Try another!');
        }
      });
    }
  }

  ngOnInit() {
    if (this.service.getName() !== ''){
      this.router.navigateByUrl('/home');
    }
  }

}
