import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { loadRecipe } from '../+state/recipe/recipe.actions';
import * as fromRecipe from '../+state/recipe/recipe.reducer';
import * as RecipeSelectors from '../+state/recipe/recipe.selectors';

@Injectable({ providedIn: 'root' })
export class RecipeCreateFacade {
  loaded$ = this.store.pipe(select(RecipeSelectors.getRecipeLoaded));
  recipeList$ = this.store.pipe(select(RecipeSelectors.getAllRecipe));
  selectedRecipe$ = this.store.pipe(select(RecipeSelectors.getSelected));

  constructor(private store: Store<fromRecipe.RecipePartialState>) { }

  load(): void {
    this.store.dispatch(loadRecipe());
  }
}
