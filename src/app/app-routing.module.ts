import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowDetailViewerComponent} from './show-detail-viewer/show-detail-viewer.component';
import {SearchShowComponent} from './search-show/search-show.component';


const routes: Routes = [
  {path: '', component: SearchShowComponent},
  {path: 'search/:query', component: SearchShowComponent},

  {path: 'search/:query/details/:showId', component: ShowDetailViewerComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
