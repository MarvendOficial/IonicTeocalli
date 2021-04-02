import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormularioPagarRentaPage } from './formulario-pagar-renta.page';

const routes: Routes = [
  {
    path: '',
    component: FormularioPagarRentaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormularioPagarRentaPageRoutingModule {}
