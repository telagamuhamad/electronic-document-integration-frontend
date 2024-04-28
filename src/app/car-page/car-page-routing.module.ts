import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarPagePage } from './car-page.page';

const routes: Routes = [
  {
    path: '',
    component: CarPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarPagePageRoutingModule {}
