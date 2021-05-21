import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Carnitas Tacos',
      'yummy tacos',
      'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2020/04/Carnitas-Tacos-2.jpg',
      [
        new Ingredient('Pork', 1),
        new Ingredient('Tortilla', 2)
      ]
    ),
    new Recipe(
      'Crispy Tempeh and Avocado Salad',
      'Healthy and crunchy and delicious',
      'https://img.taste.com.au/Ac9iyZ0_/w720-h480-cfill-q80/taste/2020/09/october20_crispy-tempeh-and-bean-salad-taste-165108-1.jpg',
      [
        new Ingredient('Tempeh', 3),
        new Ingredient('Avocado', 2)
      ]
    )
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(){
    return this.recipes.slice(); //we call slice to return an exact copy of this array from the service file
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredients(ingredients);
    console.log(ingredients);
  }
}
