import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormularioPagarRentaPageRoutingModule } from './formulario-pagar-renta-routing.module';

import { FormularioPagarRentaPage } from './formulario-pagar-renta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormularioPagarRentaPageRoutingModule
  ],
  declarations: [FormularioPagarRentaPage]
})
export class FormularioPagarRentaPageModule {}
