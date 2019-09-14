import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {TopRatedMoviesService} from '../../services/top-rated-movies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetail: any;
  id: string;
  relatedMovies: any;

  constructor(
    private _titleService: Title,
    private _topMoviesService: TopRatedMoviesService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _sanitizer: DomSanitizer
  ) {

  }

  getBackground(image) {
    return this._sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }

  ngOnInit() {

    this.id = this._activatedRoute.snapshot.params['id'];

    this._topMoviesService.getMovie(this.id)
      .subscribe(data => this.movieDetail = data);

    this._titleService.setTitle('Movie details');

    this._topMoviesService.getRelatedMovies(this.id)
      .subscribe(data => {
        this.relatedMovies = data['results'];
        console.log(this.relatedMovies);
      });
  }


}
