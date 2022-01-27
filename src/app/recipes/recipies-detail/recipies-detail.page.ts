import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.page.html',
  styleUrls: ['./recipies-detail.page.scss'],
})
export class RecipiesDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

}
