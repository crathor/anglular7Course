import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
