import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardToTabCommunicatorService {
  private $recipeChoiceListener = new Subject();

  constructor() {}

  get getListener() {
    return this.$recipeChoiceListener;
  }
}
