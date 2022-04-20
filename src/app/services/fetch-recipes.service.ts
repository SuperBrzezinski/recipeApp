import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from '../interfaces/recipe';
import { Subject, ReplaySubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FetchRecipesService {
  private dbUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.dbUrl + '/recipes');
  }

  getRecipeDetails(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(this.dbUrl + '/recipes/' + id);
  }
}
