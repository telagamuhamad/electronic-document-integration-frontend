// car-page.ts
import { Component } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import axios from 'axios';
import { environment } from '../../environments/environment'; // Import environment

@Component({
  selector: 'app-car-page',
  templateUrl: './car-page.page.html',
  styleUrls: ['./car-page.page.scss'],
})
export class CarPagePage {
  car: any;
  userId: any;
  licensePlate: any;

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {}

  async searchCar() {
    try {
      const response = await axios.get(`${environment.api_url}/car/get-car`, { 
        params: { 
          license_plate: this.licensePlate, 
          userId: this.userId
        } 
      });
      if (!response.data.error) {
        this.car = response.data.car;
      } else {
        // Handle error
        this.presentToast(response.data.error_message);
      }
    } catch (error) {
      // Handle error
      console.error('An error occurred:', error);
    }
  }

  async updateCarStatus() {
    try {
      const response = await axios.post(`${environment.api_url}/car/update-car-status`, { 
        status: this.car.status, 
        license_plate: this.car.license_plate,
        userId: this.userId 
      });
      if (!response.data.error) {
        // Update successful, handle accordingly
        console.log('Car status updated successfully');
        this.presentToast(response.data.success_message);
        // Navigate back to the home page after successful update
        this.navCtrl.navigateBack('/home-page');
      } else {
        // Handle error
        this.presentToast(response.data.error_message);
      }
    } catch (error) {
      // Handle error
      console.error('An error occurred:', error);
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

  async ngOnInit() {
    this.licensePlate = localStorage.getItem('license_plate');
    this.userId = localStorage.getItem('userId');
    await this.searchCar();
  }
}
