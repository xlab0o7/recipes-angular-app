import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecipiesDetailPageRoutingModule } from './recipies-detail-routing.module';

import { RecipiesDetailPage } from './recipies-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipiesDetailPageRoutingModule
  ],
  declarations: [RecipiesDetailPage]
})
export class RecipiesDetailPageModule {}
