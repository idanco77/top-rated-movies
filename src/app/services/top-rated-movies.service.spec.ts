import { TestBed } from '@angular/core/testing';

import { TopRatedMoviesService } from './top-rated-movies.service';

describe('TopRatedMoviesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopRatedMoviesService = TestBed.get(TopRatedMoviesService);
    expect(service).toBeTruthy();
  });
});
