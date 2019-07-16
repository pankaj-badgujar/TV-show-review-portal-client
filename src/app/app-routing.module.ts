import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ResultGridComponent} from './result-grid/result-grid.component';


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
