import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Cake',
      'choclate lava cake',
      'https://www.handletheheat.com/wp-content/uploads/2014/01/Handle-the-Heat-Chocolate-Lava-Cakes-FInals-11.jpg',
      [new Ingredient('flour', 1), new Ingredient('chocolate chips', 24)],
    ),
    new Recipe(
      'Burger',
      "Who doesn't love a burger",
      'https://www.recipetineats.com/wp-content/uploads/2016/02/Beef-Hamburgers_7-2-650x910.jpg',
      [new Ingredient('flour', 1), new Ingredient('bun', 1)],
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
