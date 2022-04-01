import { Component, OnInit } from '@angular/core';
import { CardToTabCommunicatorService } from 'src/app/services/card-to-tab-communicator.service';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  public name: string = 'Kluski z twarogiem';
  public rate: number = 5;

  constructor(private cardToTab: CardToTabCommunicatorService) {}

  ngOnInit(): void {}

  seeDetails() {
    this.cardToTab.getListener.next('bang');
  }

  rateToArr(rate: number) {
    return new Array(rate);
  }
}
