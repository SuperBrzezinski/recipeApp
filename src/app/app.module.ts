import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeListComponent,
    RecipeCardComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
