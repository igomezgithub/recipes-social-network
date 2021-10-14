import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RECIPE_FEATURE_KEY, State, RecipePartialState, recipeAdapter } from './recipe.reducer';

// Lookup the 'Recipe' feature state managed by NgRx
export const getRecipeState = createFeatureSelector<RecipePartialState, State>(RECIPE_FEATURE_KEY);

const { selectAll, selectEntities } = recipeAdapter.getSelectors();

export const getRecipeLoaded = createSelector(
  getRecipeState,
  (state: State) => state.loaded
);

export const getRecipeError = createSelector(
  getRecipeState,
  (state: State) => state.error
);

export const getAllRecipe = createSelector(
  getRecipeState,
  (state: State) => selectAll(state)
);

export const getRecipeEntities = createSelector(
  getRecipeState,
  (state: State) => selectEntities(state)
);

export const getSelectedId = createSelector(
  getRecipeState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getRecipeEntities,
  getSelectedId,
  (entities, selectedId) => selectedId && entities[selectedId]
);
