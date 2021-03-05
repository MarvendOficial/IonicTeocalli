import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValorarPageRoutingModule } from './valorar-routing.module';

import { ValorarPage } from './valorar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValorarPageRoutingModule
  ],
  declarations: [ValorarPage]
})
export class ValorarPageModule {}
