export class MoviesModel {
  page: number;
  results: MovieModel[];
}

export class MovieModel {
  id: number;
  poster_path: string;
  title: string;
}
