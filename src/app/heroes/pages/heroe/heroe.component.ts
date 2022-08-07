import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css'],
})
export class HeroeComponent implements OnInit {
  loadingHero: boolean = false;
  heroe!: Heroe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHeroe();
  }

  getHeroe() {
    this.loadingHero = true;
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroe(id)))
      .subscribe((res) => {
        this.loadingHero = false;
        this.heroe = res;
        console.log('funcion heroe', res);
      });
  }

  regresar() {
    this.router.navigate(['/heroes/listado']);
  }
}
