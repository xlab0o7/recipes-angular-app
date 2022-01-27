import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RecipesPageModule } from './recipes/recipes.module';
import { RecipiesDetailPageRoutingModule } from './recipes/recipies-detail/recipies-detail-routing.module';
import { RecipiesDetailPageModule } from './recipes/recipies-detail/recipies-detail.module';
import { RecipiesDetailPage } from './recipes/recipies-detail/recipies-detail.page';

const routes: Routes = [
  // {
  //   path: '', component: RecipesPageModule , pathMatch: 'full'
  // },

  // {
  //   path: 'recipes-detail', component: RecipiesDetailPageModule
  // }

  { path: '', redirectTo: 'recipes', pathMatch: 'full' },

  {
    path: 'recipes',
    children: [
      {
        path: '',
        loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)

      },
      {
        path: ':recipeId',
        loadChildren: () => import('./recipes/recipies-detail/recipies-detail.module').then( m => m.RecipiesDetailPageModule)

      }
      // {
        // path: ':recipeId',
        // loadChildren: './recipes/recipes-detail/recipes-detail.module#RecipesDetailPageModule'
        // loadChildren: () => import('./recipes/recipes-detail/recipes-detail.module').then(a => a.RecipesDetailPageModule)

      // }
    ]

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
