import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerUbicacionPageRoutingModule } from './ver-ubicacion-routing.module';

import { VerUbicacionPage } from './ver-ubicacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerUbicacionPageRoutingModule
  ],
  declarations: [VerUbicacionPage]
})
export class VerUbicacionPageModule {}
