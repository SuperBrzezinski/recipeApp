import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { CardToDetailsCommunicatorService } from 'src/app/services/card-to-details-communicator.service';
import { FetchRecipesService } from 'src/app/services/fetch-recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  public recipe!: Recipe;

  constructor(
    private fetchRecipes: FetchRecipesService,
    private cardToDetailsCommunicator: CardToDetailsCommunicatorService
  ) {}

  ngOnInit(): void {
    this.fetchRecipes.getListener.subscribe((recipes) => {
      this.recipe = recipes[0];
    });
    // this.fetchRecipes.getListener.unsubscribe();
    this.cardToDetailsCommunicator.getListener.subscribe((recipe) => {
      this.recipe = recipe;
    });
  }

  rateToArr(rate: number) {
    return new Array(rate);
  }

  takeRecipe(recipe: Recipe) {
    this.recipe = recipe;
  }
}
