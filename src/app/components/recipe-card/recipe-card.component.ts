import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
})
export class RecipeCardComponent implements OnInit {
  public name: string = 'Pizza';
  public rate: number = 5;

  constructor() {}

  ngOnInit(): void {}

  rateToArr(rate: number) {
    return new Array(rate);
  }
}
