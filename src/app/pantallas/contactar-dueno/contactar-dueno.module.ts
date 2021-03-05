import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactarDuenoPageRoutingModule } from './contactar-dueno-routing.module';

import { ContactarDuenoPage } from './contactar-dueno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactarDuenoPageRoutingModule
  ],
  declarations: [ContactarDuenoPage]
})
export class ContactarDuenoPageModule {}
