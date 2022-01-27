import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipiesDetailPage } from './recipies-detail.page';

const routes: Routes = [
  {
    path: '',
    component: RecipiesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecipiesDetailPageRoutingModule {}
