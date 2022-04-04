import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/interfaces/recipe';
import { FetchRecipesService } from 'src/app/services/fetch-recipes.service';

interface SortType {
  name: string;
  category: 'lexOrder' | 'rating';
  inUse: boolean;
}

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  public list: Recipe[] = [];
  public sorts: SortType[] = [
    { name: 'A-Z', category: 'lexOrder', inUse: false },
    { name: 'Z-A', category: 'lexOrder', inUse: false },
    { name: '5-1', category: 'rating', inUse: false },
    { name: '1-5', category: 'rating', inUse: false },
  ];
  constructor(private fetchRecipes: FetchRecipesService) {}

  ngOnInit(): void {
    this.fetchRecipes.getListener.subscribe((recipes) => {
      this.list = recipes;
    });
  }

  addSort(name: string, category: 'lexOrder' | 'rating') {
    // if (this.sorts.includes({name: string category: category })) {
    // }
    this.sorts.forEach((entry) => {
      if (entry.category === category) {
        entry.inUse = false;
      }
    });
    let index = this.sorts.findIndex((entry) => entry.name === name);
    this.sorts[index].inUse = !this.sorts[index].inUse;
  }

  deleteSort(name: string) {
    this.sorts[this.sorts.findIndex((entry) => entry.name === name)].inUse =
      false;
  }
}
