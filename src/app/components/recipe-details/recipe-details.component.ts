import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Recipe } from 'src/app/interfaces/recipe';
import { FetchRecipesService } from 'src/app/services/fetch-recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  public recipe!: Observable<Recipe>;

  private recipeId: number = 1;

  constructor(
    private fetchRecipes: FetchRecipesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.init();
  }

  rateToArr(rate: number) {
    return new Array(rate);
  }

  private init() {
    this.recipe = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.fetchRecipes.getRecipeDetails(Number(params.get('id')))
      )
    );
    // this.route.paramMap.subscribe((params: ParamMap) => {
    //   this.recipeId = Number(params.get('id'));
    // });
    // this.fetchRecipes.getListener.subscribe((recipes) => {
    //   let tempRecipe: Recipe | undefined;
    //   tempRecipe = recipes.find((recipe) => {
    //     return recipe.id === this.recipeId;
    //   });
    //   if (tempRecipe == undefined) {
    //     this.recipe = recipes[0];
    //   } else {
    //     this.recipe = tempRecipe;
    //   }
    // });

    // this.fetchRecipes.getListener.subscribe((recipes) => {
    //   let tempRecipe: Recipe | undefined;
    //   tempRecipe = recipes.find((recipe) => {
    //     return recipe.id === this.recipeId;
    //   });
    //   if (tempRecipe == undefined) {
    //     this.recipe = recipes[0];
    //   } else {
    //     this.recipe = tempRecipe;
    //   }
    // });

    // this.route.paramMap.subscribe();

    // this.cardToDetailsCommunicator.getListener.subscribe((recipe) => {
    //   this.recipe = recipe;
    // });
  }
}
