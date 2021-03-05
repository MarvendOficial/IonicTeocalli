import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistorialDePagosPageRoutingModule } from './historial-de-pagos-routing.module';

import { HistorialDePagosPage } from './historial-de-pagos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistorialDePagosPageRoutingModule
  ],
  declarations: [HistorialDePagosPage]
})
export class HistorialDePagosPageModule {}
