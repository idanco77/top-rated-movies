import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TopRatedMoviesComponent} from './components/top-rated-movies/top-rated-movies.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';

const appRouters: Routes = [
  {path: '', redirectTo: 'top-rated-movies', pathMatch: 'full'},
  {path: 'top-rated-movies', component: TopRatedMoviesComponent},
  {path: 'movies/:id', component: MovieDetailsComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouters)
  ]
})
export class AppRoutingModule {
}
