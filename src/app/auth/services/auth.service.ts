import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;

  private _auth: Auth | undefined;

  get auth() {
    return { ...this._auth };
  }

  constructor(private http: HttpClient) {}

  login(): Observable<Auth> {
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      tap((res) => (this._auth = res)),
      tap((res) => localStorage.setItem('token', res.id))
    );
  }

  verificaAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }
    return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`).pipe(
      map((auth) => {
        // console.log('map', auth);
        this._auth = auth;
        return true;
      })
    );
  }
}
