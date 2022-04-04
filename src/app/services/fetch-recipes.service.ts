import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../interfaces/recipe';
import { Subject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchRecipesService {
  private dbUrl = 'http://localhost:3000';
  private $recipes = new ReplaySubject<Recipe[]>(1);

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
