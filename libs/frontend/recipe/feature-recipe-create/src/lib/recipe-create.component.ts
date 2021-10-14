import { Component, OnInit} from '@angular/core';
import { RecipeCreateFacade } from '@recipes-social-network/frontend/recipe/domain';

@Component({
  selector: 'frontend/recipe-recipe-create',
  templateUrl: './recipe-create.component.html',
  styleUrls: ['./recipe-create.component.scss']
})
export class RecipeCreateComponent implements OnInit {


    recipeList$ = this.recipeCreateFacade.recipeList$;


    constructor(private recipeCreateFacade: RecipeCreateFacade) {
    }


    ngOnInit() {
        this.load();
    }

    load(): void {
        this.recipeCreateFacade.load();
    }

}

