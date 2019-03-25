import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('vanilla extract', 10),
    new Ingredient('chocolate chips', 100),
  ];
  constructor() {}

  ngOnInit() {}

  onIngredientAdded(ingredient) {
    this.ingredients.push(ingredient);
  }
}
