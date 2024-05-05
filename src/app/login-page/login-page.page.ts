import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.page.html',
  styleUrls: ['./login-page.page.scss'],
})
export class LoginPagePage implements OnInit {

  username: string = '';
  password: string = '';

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) { }

  async login() {
    try {
      const response = await axios.post(`${environment.api_url}/login`, {
        username: this.username,
        password: this.password
      });
      if (response.data.token) {
        // Login successful
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('userId', response.data.userId);
        localStorage.setItem('license_plate', response.data.license_plate);
        // Redirect to home page
        this.navCtrl.navigateRoot('/home-page');
      } else {
        // Login failed
        this.presentToast('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('An error occurred:', error);
      this.presentToast('An error occurred while trying to login.');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  ngOnInit() {
  }

}