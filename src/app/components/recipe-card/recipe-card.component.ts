import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { CardToTabService } from 'src/app/services/card-to-tab.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  @Input() public recipe!: Recipe;
  // public name: string = 'Kluski z twarogiem';
  // public rating: number = 5;

  constructor(private cardToTab: CardToTabService) {}

  openDetailsTab() {
    this.cardToTab.tab.next('details');
  }
  ngOnInit(): void {}

  rateToArr(rate: number) {
    return new Array(rate);
  }
}
