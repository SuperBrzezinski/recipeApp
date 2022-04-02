import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.scss'],
})
export class RecipeDetailsComponent implements OnInit {
  public name: string = 'Kluski z Twarogiem';
  public rating: number = 5;
  public ingredients: any = [
    {
      name: 'makaron',
      value: '250g',
    },
    {
      name: 'sól',
      value: 'szczypta',
    },
    {
      name: 'twaróg',
      value: '150g',
    },
  ];
  public imgUrl: string =
    'https://d3iamf8ydd24h9.cloudfront.net/pictures/articles/2019/08/1065827-v-1500x1500.jpg';

  public description: string[] = [
    'Przygotowujemy garnek wody i solimy go',
    'Gotujemy wodę',
    'Gotujemy makaron',
    'Do ugatowanego makaronu dodajemy twaróg',
  ];

  constructor() {}

  ngOnInit(): void {}

  rateToArr(rate: number) {
    return new Array(rate);
  }
}
