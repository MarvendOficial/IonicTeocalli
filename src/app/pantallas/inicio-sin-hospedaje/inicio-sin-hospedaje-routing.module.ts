import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioSinHospedajePage } from './inicio-sin-hospedaje.page';

const routes: Routes = [
  {
    path: '',
    component: InicioSinHospedajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioSinHospedajePageRoutingModule {}
