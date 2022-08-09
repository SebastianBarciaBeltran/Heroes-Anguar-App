import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe, Publisher } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css'],
})
export class AgregarComponent implements OnInit {
  public publishers = [
    { id: 'DC Comics', desc: 'DC - Comics' },
    { id: 'Marvel Comics', desc: 'Marvel - Comics' },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroeService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.heroeEditar();
  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      // actualizamos
      this.heroeService.setEditHero(this.heroe).subscribe((res) => {
        this.router.navigate(['/heroes/listado']);
      });
    } else {
      // insertamos
      this.heroeService.setNewHero(this.heroe).subscribe((res) => {
        this.router.navigate(['/heroes/listado']);
      });

      this.heroe = {
        superhero: '',
        alter_ego: '',
        characters: '',
        first_appearance: '',
        publisher: Publisher.DCComics,
        alt_img: '',
      };
    }
  }

  heroeEditar() {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeService.getHeroe(id)))
      .subscribe((res) => {
        this.heroe = res;
      });
  }
}
