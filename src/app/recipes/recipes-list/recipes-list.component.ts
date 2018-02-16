import { Component } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component ({
    selector: 'app-recipes-list',
    templateUrl: 'recipes-list.component.html'
})

export class RecipesListComponent {
    recipes: Recipe[] = [
        new Recipe('Test Recipe', 'Test Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/1199px-Recipe-575434.svg.png'),
        new Recipe('Test Recipe', 'Test Description', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Recipe-575434.svg/1199px-Recipe-575434.svg.png')

    ];
}