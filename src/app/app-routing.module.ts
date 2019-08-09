import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ShowDetailViewerComponent} from './show-detail-viewer/show-detail-viewer.component';
import {SearchShowComponent} from './search-show/search-show.component';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {HomepageComponent} from "./homepage/homepage.component";
import {EpisodeListComponent} from "./episode-list/episode-list.component";


const routes: Routes = [
  {path: '', component: HomepageComponent},
  {path: 'search', component: SearchShowComponent},
  {path: 'search/:query', component: SearchShowComponent},
  {path: 'details/:showId', component: ShowDetailViewerComponent},
  {path: 'search/:query/details/:showId', component: ShowDetailViewerComponent},
  {path: 'login',component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'details/:showId/episodes', component: EpisodeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
