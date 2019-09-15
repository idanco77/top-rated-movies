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
  id: number;
  relatedMovies: any;

  constructor(private titleService: Title, private topMoviesService: TopRatedMoviesService,
              private activatedRoute: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer
  ) {
  }

  getBackground(image) {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${image})`);
  }

  ngOnInit() {
    this.titleService.setTitle('Movie details');
    this.id = +this.activatedRoute.snapshot.params['id'];
    this.topMoviesService.getMovie(this.id)
      .subscribe(data => this.movieDetail = data);
    this.topMoviesService.getRelatedMovies(this.id)
      .subscribe(data => {
        this.relatedMovies = data['results'];
      });
  }


}
