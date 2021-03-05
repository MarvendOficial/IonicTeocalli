import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistorialDePagosPage } from './historial-de-pagos.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialDePagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistorialDePagosPageRoutingModule {}
