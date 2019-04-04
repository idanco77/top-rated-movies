import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {DomSanitizer} from '@angular/platform-browser';
import {TopRatedMoviesService} from '../../services/top-rated-movies.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {
  topFivePages: Array<any> = [];
  pageNum: number;
  topRatedMovies: Array<any> = [];

  constructor(
    private _titleService: Title,
    private _topMoviesService: TopRatedMoviesService,
    private _sanitizer: DomSanitizer
  ) {
    this.pageNum = 1;
  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }

  ngOnInit(): void {
    this._titleService.setTitle('Top Rated Movies');
    this.onScrollDown();
  }

  onScrollDown() {
    this._topMoviesService.getPopularMovies(this.pageNum)
      .subscribe(data => {
        if (this.topFivePages.length <= 4) {
          this.topFivePages.push(data);
          this.topRatedMovies = [];
          for (const page of this.topFivePages) {
            this.topRatedMovies = this.topRatedMovies.concat(page.results);
          }
        }
      });
    this.pageNum++;
  }

}
