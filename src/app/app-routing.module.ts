import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PythonComponent } from './python/python.component';
import { JavascriptComponent } from './javascript/javascript.component';
import { DevopsComponent } from './devops/devops.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'python',
    component: PythonComponent
  },
  {
    path:'javascript',
    component: JavascriptComponent
  },
  {
    path:'devops',
    component: DevopsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
