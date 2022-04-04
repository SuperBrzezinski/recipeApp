import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../interfaces/recipe';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchRecipesService {
  private dbUrl = 'http://localhost:3000';
  private $recipes = new Subject<Recipe[]>();

  constructor(private http: HttpClient) {
    this.getRecipes();
  }

  getRecipes() {
    this.http
      .get<Recipe[]>(this.dbUrl + '/recipes')
      .subscribe((fetchedRecipes) => {
        console.log(fetchedRecipes);

        this.$recipes.next(fetchedRecipes);
      });
  }

  get getListener() {
    return this.$recipes;
  }
}
