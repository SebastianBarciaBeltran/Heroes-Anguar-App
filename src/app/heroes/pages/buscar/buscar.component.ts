import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroe.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  public termino: string = '';
  heroes: Heroe[] = [];
  heroe!: Heroe;
  heroeSeleccionado!: Heroe | undefined;

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {}

  buscando() {
    this.heroesService.getSugerencias(this.termino.trim()).subscribe((res) => {
      this.heroes = [...res];
    });
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.heroeSeleccionado = undefined;
      return;
    } else {
      this.heroe = event.option.value;
      this.termino = this.heroe.superhero;

      this.heroesService.getHeroe(this.heroe.id!).subscribe((res) => {
        this.heroeSeleccionado = { ...res };
      });
    }
  }
}
