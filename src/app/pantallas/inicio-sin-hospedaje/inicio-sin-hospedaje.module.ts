import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioSinHospedajePageRoutingModule } from './inicio-sin-hospedaje-routing.module';

import { InicioSinHospedajePage } from './inicio-sin-hospedaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioSinHospedajePageRoutingModule
  ],
  declarations: [InicioSinHospedajePage]
})
export class InicioSinHospedajePageModule {}
