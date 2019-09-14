import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopRatedMoviesService {

  private movieUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '9634fe15d8fc58265bae2c62cdcd9bd4';
  private jsonpCallback = 'callback=JSONP_CALLBACK';

  constructor(private _http: HttpClient) {
  }

  getPopularMovies(page) {
    const sortBy = '&sort_by=popularity.desc&api_key=';
    const popularMoviesUrl = 'https://api.themoviedb.org/3/discover/movie/?page=';
    return this._http.jsonp(
      popularMoviesUrl + page + sortBy + this.apiKey + '&' + this.jsonpCallback,
      'jsonpCallback');
  }

  getMovie(id) {
    return this._http.jsonp(this.movieUrl + 'movie/' + id + '?api_key=' + this.apiKey + '&' + this.jsonpCallback, 'jsonpCallback');
  }

  getRelatedMovies(id) {
    return this._http.jsonp(this.movieUrl + 'movie/' + id + '/similar?api_key=' + this.apiKey + '&' + this.jsonpCallback, 'jsonpCallback');
  }
}
