import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interfaces';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  public BaseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<Heroe[]> {
    const url: string = `${this.BaseUrl}/heroes`;

    return this.http.get<Heroe[]>(url);
  }

  getHeroe(id: string): Observable<Heroe> {
    const url: string = `${this.BaseUrl}/heroes/${id}`;

    return this.http.get<Heroe>(url);
  }
}
