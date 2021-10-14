import { createAction, props } from '@ngrx/store';
import { Recipe } from '../../entities/recipe';

export const loadRecipe = createAction(
  '[Recipe] Load Recipe'
);

export const loadRecipeSuccess = createAction(
  '[Recipe] Load Recipe Success',
  props<{ recipe: Recipe[] }>()
);

export const loadRecipeFailure = createAction(
  '[Recipe] Load Recipe Failure',
  props<{ error: any }>()
);
