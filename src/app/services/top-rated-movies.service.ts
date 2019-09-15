import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {timeout} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopRatedMoviesService {
  private apiKey = '9634fe15d8fc58265bae2c62cdcd9bd4';

  constructor(private http: HttpClient) {
  }

  getPopularMovies(page) {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('page', page);
    searchParams = searchParams.append('sort_by', 'popularity.desc');
    searchParams = searchParams.append('api_key', this.apiKey);
    return this.http.get(
      'https://api.themoviedb.org/3/discover/movie/',
      {params: searchParams}
    );
  }

  getMovie(id) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' + id,
      {params: new HttpParams().set('api_key', this.apiKey)});
  }

  getRelatedMovies(id) {
    return this.http.get(
      'https://api.themoviedb.org/3/movie/' + id + '/similar?',
      {params: new HttpParams().set('api_key', this.apiKey)});
  }
}
