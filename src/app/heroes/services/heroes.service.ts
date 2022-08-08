import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Heroe } from '../interfaces/heroe.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    const url: string = `${this.baseUrl}/heroes`;

    return this.http.get<Heroe[]>(url);
  }

  getHeroe(id: string): Observable<Heroe> {
    const url: string = `${this.baseUrl}/heroes/${id}`;

    return this.http.get<Heroe>(url);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    const url: string = `${this.baseUrl}/heroes?q=${termino}&_limit=4`;

    return this.http.get<Heroe[]>(url);
  }
}
