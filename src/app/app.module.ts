import {BrowserModule, Title} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';

import {AppComponent} from './app.component';
import {TopNavComponent} from './components/top-nav/top-nav.component';
import {TopRatedMoviesComponent} from './components/top-rated-movies/top-rated-movies.component';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {TopRatedMoviesService} from './services/top-rated-movies.service';
import {MovieDetailsComponent} from './components/movie-details/movie-details.component';
import {FooterComponent} from './components/footer/footer.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    TopRatedMoviesComponent,
    PageNotFoundComponent,
    MovieDetailsComponent,
    FooterComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule
  ],
  providers: [
    AppComponent,
    Title,
    TopRatedMoviesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
