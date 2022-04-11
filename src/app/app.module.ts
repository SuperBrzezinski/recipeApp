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
import { ReactiveFormsModule } from '@angular/forms';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'yo/:id',
    component: RecipeFormComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RecipeListComponent,
    RecipeCardComponent,
    TabPanelComponent,
    RecipeDetailsComponent,
    RecipeFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
