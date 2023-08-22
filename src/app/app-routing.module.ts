import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildNameComponent } from './components/child-name/child-name.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '/babiesGodNames',
    children: [
      { path: '', component: HomeComponent },
      { path: 'childNames/:gender', component: ChildNameComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
