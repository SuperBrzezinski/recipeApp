import { Injectable } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root',
})
export class CardToDetailsCommunicatorService {
  private $recipeChoiceListener = new ReplaySubject<Recipe>(1);

  constructor() {}

  get getListener() {
    return this.$recipeChoiceListener;
  }
}
