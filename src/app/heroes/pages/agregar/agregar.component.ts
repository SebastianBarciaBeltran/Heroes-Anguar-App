import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { DialogConfirmDeleteHeroeComponent } from '../../components/dialog-confirm-delete-heroe/dialog-confirm-delete-heroe.component';
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
    private activatedRoute: ActivatedRoute,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.router.url.includes('editar')) {
      this.heroeEditar();
    }
  }

  guardar() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      // actualizamos
      this.heroeService.setEditHero(this.heroe).subscribe((res) => {
        this.openSnackBar('Registro actualizado correctamente');
      });
    } else {
      // insertamos
      this.heroeService.setNewHero(this.heroe).subscribe((res) => {
        this.openSnackBar('Registro creado correctamente');
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
        this.heroe = { ...res };
      });
  }

  eliminarHeroe() {
    const dialog = this.dialog.open(DialogConfirmDeleteHeroeComponent, {
      width: '350px',
      data: { ...this.heroe },
    });

    dialog.afterClosed().subscribe((res) => {
      if (res) {
        this.heroeService.deleteHero(this.heroe.id!).subscribe((res) => {
          this.router.navigate(['/heroes/listado']);
        });
      }
    });

    dialog
      .afterClosed()
      .pipe(
        switchMap((res) => {
          return res
            ? this.heroeService.deleteHero(this.heroe.id!)
            : this.router.navigate([`/heroes/editar/`, this.heroe.id!]);
        })
      )
      .subscribe();
  }

  openSnackBar(mensaje: string): void {
    this._snackBar.open(mensaje, 'ok', {
      duration: 2500,
    });
  }
}
