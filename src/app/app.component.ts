import { Component, OnInit } from '@angular/core';
import { Platform, Config } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {environment} from 'src/environments/environment';
import { UsersService } from './users.service';
import { SocketService } from './socket.service';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  users = [];
  name = '';
  subscription: Subscription;
  source = interval(1000);
  public appPages = [
    {
      title: 'Chats',
      url: '/home',
      icon: 'mail'
    },
    {
      title: 'Logout ',
      url:  '/logout',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private service: UsersService,
    private socketService: SocketService
  ) {
    this.initializeApp();
  }

  updateSideBar() {
    console.log("updating");
    this.users = this.service.getUsers();
    this.name = this.service.getName();
    if (this.name === ''){
      this.appPages[1].title = 'Login';
      this.appPages[1].url = '/sign-in';
    }
    else {
      this.appPages[1].title = 'Logout ' + this.name;
      this.appPages[1].url = '/logout';
    }
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.updateSideBar();
    this.subscription = this.source.subscribe(val => this.updateSideBar());
  }
  

  ngOnInit() {
    this.socketService.setupSocketConnection();
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
