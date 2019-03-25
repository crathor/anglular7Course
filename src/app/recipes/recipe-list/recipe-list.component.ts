import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Cake',
      'choclate lava cake',
      'https://www.handletheheat.com/wp-content/uploads/2014/01/Handle-the-Heat-Chocolate-Lava-Cakes-FInals-11.jpg',
    ),
  ];
  constructor() {}

  ngOnInit() {}
}