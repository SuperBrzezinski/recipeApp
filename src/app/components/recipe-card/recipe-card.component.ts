import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { CardToDetailsCommunicatorService } from 'src/app/services/card-to-details-communicator.service';
import { CardToTabCommunicatorService } from 'src/app/services/card-to-tab-communicator.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() public recipe!: Recipe;
  // public name: string = 'Kluski z twarogiem';
  // public rating: number = 5;

  constructor(
    private cardToTab: CardToTabCommunicatorService,
    private CardToDetails: CardToDetailsCommunicatorService
  ) {}

  ngOnInit(): void {}

  seeDetails() {
    this.CardToDetails.getListener.next(this.recipe);
    this.cardToTab.getListener.next('bang');
  }

  rateToArr(rate: number) {
    return new Array(rate);
  }
}
