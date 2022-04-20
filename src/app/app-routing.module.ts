import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipeFormComponent } from './components/recipe-form/recipe-form.component';
import { TabPanelComponent } from './components/tab-panel/tab-panel.component';

const routes: Routes = [
  { path: '', redirectTo: 'details/1', pathMatch: 'full' },
  { path: 'details', redirectTo: 'details/1' },
  { path: 'details/:id', component: RecipeDetailsComponent },
  { path: 'form', component: RecipeFormComponent },
  { path: '**', redirectTo: 'details/1' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
