import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { RecipeCardComponent } from './components/recipe-card/recipe-card.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeListComponent,
    RecipeCardComponent,
    TabPanelComponent,
    RecipeDetailsComponent,
  ],
  imports: [BrowserModule, NgbModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
