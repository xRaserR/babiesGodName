import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildNameComponent } from './components/child-name/child-name.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'babiesGodNames', component: HomeComponent },
      { path: 'babiesGodNames/childNames/:gender', component: ChildNameComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
