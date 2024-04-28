import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  username:any;
  password:any;
  constructor() { }

  async login() {
    console.log(this.username, this.password);
  }

  ngOnInit() {
  }

}
