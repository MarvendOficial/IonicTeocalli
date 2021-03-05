import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionarHospedajePage } from './seleccionar-hospedaje.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionarHospedajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionarHospedajePageRoutingModule {}
