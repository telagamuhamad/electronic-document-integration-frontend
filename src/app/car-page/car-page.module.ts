import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarPagePageRoutingModule } from './car-page-routing.module';

import { CarPagePage } from './car-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarPagePageRoutingModule
  ],
  declarations: [CarPagePage]
})
export class CarPagePageModule {}
