import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarHospedajePageRoutingModule } from './seleccionar-hospedaje-routing.module';

import { SeleccionarHospedajePage } from './seleccionar-hospedaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarHospedajePageRoutingModule
  ],
  declarations: [SeleccionarHospedajePage]
})
export class SeleccionarHospedajePageModule {}
