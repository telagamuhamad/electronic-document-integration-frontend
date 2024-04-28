import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TravelPagePageRoutingModule } from './travel-page-routing.module';

import { TravelPagePage } from './travel-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TravelPagePageRoutingModule
  ],
  declarations: [TravelPagePage]
})
export class TravelPagePageModule {}
