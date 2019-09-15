import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TopRatedMoviesService} from '../../services/top-rated-movies.service';
import {MovieModel, MoviesModel} from '../../movies.model';


@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {
  moviesArray: MovieModel[] = [];
  setSpinner = false;
  pageNum: number;

  constructor(
    private titleService: Title, private topMoviesService: TopRatedMoviesService,
    private sanitizer: DomSanitizer
  ) {
  }

  getBackground(image) {
    return this.sanitizer.bypassSecurityTrustStyle(
      `linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }

  ngOnInit(): void {
    this.pageNum = 1;
    this.titleService.setTitle('Top Rated Movies');
    this.onScrollDown();
  }

  onScrollDown() {
    if (this.pageNum <= 5) {
      this.setSpinner = true;
    }
    setTimeout(() => {
      this.topMoviesService.getPopularMovies(this.pageNum)
        .subscribe((movies: MoviesModel) => {
          if (this.pageNum <= 5) {
            for (const movie of movies['results']) {
              this.moviesArray.push(movie);
            }
          }
          this.pageNum++;
          this.setSpinner = false;
        });
    }, 1000);
  }
}
