import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemPagePageRoutingModule } from './item-page-routing.module';

import { ItemPagePage } from './item-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemPagePageRoutingModule
  ],
  declarations: [ItemPagePage]
})
export class ItemPagePageModule {}
