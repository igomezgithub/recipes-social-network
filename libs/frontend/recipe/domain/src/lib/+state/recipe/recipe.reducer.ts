import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as RecipeActions from './recipe.actions';
import { Recipe } from '../../entities/recipe';

export const RECIPE_FEATURE_KEY = 'frontend/recipe-recipe';

export interface State extends EntityState<Recipe> {
  selectedId ?: string | number;          // which Recipe record has been selected
  loaded      : boolean;                  // has the Recipe list been loaded
  error      ?: string | null;            // last known error (if any)
}

export interface RecipePartialState {
  readonly [RECIPE_FEATURE_KEY]: State;
}

export const recipeAdapter: EntityAdapter<Recipe> = createEntityAdapter<Recipe>();

export const initialState: State = recipeAdapter.getInitialState({
  // set initial required properties
  loaded : false
});

const recipeReducer = createReducer(
  initialState,
  on(RecipeActions.loadRecipe,
    state => ({ ...state, loaded: false, error: null })
  ),
  on(RecipeActions.loadRecipeSuccess,
    (state, { recipe }) => recipeAdapter.upsertMany(recipe, { ...state, loaded: true })
  ),
  on(RecipeActions.loadRecipeFailure,
    (state, { error }) => ({ ...state, error })
  ),
);

export function reducer(state: State | undefined, action: Action) {
  return recipeReducer(state, action);
}
