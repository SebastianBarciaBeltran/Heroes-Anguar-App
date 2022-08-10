import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.css'],
})
export class HeroesHomeComponent implements OnInit {
  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {}

  get auth() {
    return this.authService.auth;
  }

  logOut() {
    localStorage.removeItem('token');
    this.router.navigate(['./auth']);
  }
}
