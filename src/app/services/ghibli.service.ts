import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface GhibliFilm {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  image: string;
  movie_banner: string;
  localRating?: number;
  watchStatus?: 'Not watched' | 'Watched' | 'Rewatch';
}

@Injectable({
  providedIn: 'root',
})
export class GhibliService {
  private baseUrl = 'https://ghibliapi.vercel.app';

  constructor(private http: HttpClient) {}

  getFilms(): Observable<GhibliFilm[]> {
    return this.http.get<GhibliFilm[]>(`${this.baseUrl}/films`);
  }

  getFilmById(id: string): Observable<GhibliFilm> {
    return this.http.get<GhibliFilm>(`${this.baseUrl}/films/${id}`);
  }
}
