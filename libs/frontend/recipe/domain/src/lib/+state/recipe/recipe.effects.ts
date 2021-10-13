import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as RecipeActions from './recipe.actions';
import { RecipeDataService } from '../../infrastructure/recipe.data.service';

@Injectable()
export class RecipeEffects {
  loadRecipe$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RecipeActions.loadRecipe),
      switchMap((action) =>
        this.recipeDataService.load().pipe(
          map((recipe) =>
            RecipeActions.loadRecipeSuccess({ recipe })
          ),
          catchError((error) =>
            of(RecipeActions.loadRecipeFailure({ error }))
          )
        )
      )
    )
  );

 constructor(
   private actions$: Actions,
   private recipeDataService: RecipeDataService
  ) { }
}
