import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendRecipeDomainModule } from '@recipes-social-network/frontend/recipe/domain';
import { RecipeCreateComponent } from './recipe-create.component';

@NgModule({
  imports: [CommonModule, FrontendRecipeDomainModule],
  declarations: [
    RecipeCreateComponent
  ],
  exports: [
    RecipeCreateComponent
  ],
})
export class FrontendRecipeFeatureRecipeCreateModule {}
