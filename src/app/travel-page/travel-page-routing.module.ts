import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TravelPagePage } from './travel-page.page';

const routes: Routes = [
  {
    path: '',
    component: TravelPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TravelPagePageRoutingModule {}
