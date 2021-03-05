import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagarRentaPageRoutingModule } from './pagar-renta-routing.module';

import { PagarRentaPage } from './pagar-renta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagarRentaPageRoutingModule
  ],
  declarations: [PagarRentaPage]
})
export class PagarRentaPageModule {}
