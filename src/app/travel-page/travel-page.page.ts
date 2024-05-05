import { Component, OnInit } from '@angular/core';
import { NavController, ToastController } from '@ionic/angular';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-travel-page',
  templateUrl: './travel-page.page.html',
  styleUrls: ['./travel-page.page.scss'],
})
export class TravelPagePage implements OnInit {

  deliveryOrderNumber: string = '';
  deliveryOrder: any;
  deliveryOrderItems: any = [];
  paymentImage: any;
  paymentMethod: string = '';
  paidAmount: any;
  paymentChange: any;
  isPaid: boolean = false;
  licensePlate: any;
  userId: any;
  isReceived: boolean = false;

  constructor(private navCtrl: NavController, private toastCtrl: ToastController) {}

  async getItems() {
    try {
      const response = await axios.get(`${environment.api_url}/edi/get-item`, { 
        params: 
        { 
          delivery_order_number: this.deliveryOrderNumber, 
          license_plate: this.licensePlate,
          userId: this.userId
        } });
      if (!response.data.error) {
        this.deliveryOrder = response.data.deliveryOrder;
        this.isPaid = this.deliveryOrder.is_paid;
        this.isReceived = this.deliveryOrder.is_received;
        this.deliveryOrderItems = response.data.deliveryOrderItems;
      } else {
        this.presentToast(response.data.error_message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.paymentImage = file;
    }
  }
  
  async updateItemStatus() {
    try {
      this.calculateChange();
  
      const formData = new FormData();
      formData.append('delivery_order_number', this.deliveryOrderNumber);
      formData.append('payment_method', this.paymentMethod);
      formData.append('paid_amount', this.paidAmount);
      formData.append('payment_change', this.paymentChange);
      formData.append('license_plate', this.licensePlate);
      formData.append('userId', this.userId);
  
      if (this.paymentMethod === 'Transfer' && this.paymentImage) {
        console.log(this.paymentImage);
        formData.append('payment_image', this.paymentImage);
      }
  
      const response = await axios.post(`${environment.api_url}/edi/update-item-status`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
  
      if (!response.data.error) {
        this.presentToast(response.data.success_message);
        // Navigasi ke halaman beranda setelah berhasil mengonfirmasi pembayaran
        this.navCtrl.navigateRoot('/home-page');
      } else {
        this.presentToast(response.data.error_message);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }
    

  calculateChange() {
    console.log(this.deliveryOrder);
    if (this.paymentMethod === 'Tunai') {
      if (this.deliveryOrder.total_price && this.paidAmount) {
        const totalPrice = parseFloat(this.deliveryOrder.total_price);
        const paidAmount = parseFloat(this.paidAmount);
        console.log(totalPrice, paidAmount);
        if (!isNaN(totalPrice) && !isNaN(paidAmount)) {
          this.paymentChange = (paidAmount - totalPrice).toFixed(2);
        }
      }
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
    this.licensePlate = localStorage.getItem('license_plate');
    this.userId = localStorage.getItem('userId');
  }

}