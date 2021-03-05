import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValorarPage } from './valorar.page';

const routes: Routes = [
  {
    path: '',
    component: ValorarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValorarPageRoutingModule {}
