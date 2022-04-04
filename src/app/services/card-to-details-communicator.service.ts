import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Recipe } from '../interfaces/recipe';

@Injectable({
  providedIn: 'root',
})
export class CardToDetailsCommunicatorService {
  private $recipeChoiceListener = new Subject<Recipe>();

  constructor() {}

  get getListener() {
    return this.$recipeChoiceListener;
  }
}
