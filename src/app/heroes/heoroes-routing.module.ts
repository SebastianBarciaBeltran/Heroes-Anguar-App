import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListadoHeroesComponent } from './pages/listado-heroes/listado-heroes.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';

const routes: Routes = [
  {
    path: '',
    component: HeroesHomeComponent,
    children: [
      { path: 'listado', component: ListadoHeroesComponent },
      { path: 'agregar', component: AgregarComponent },
      { path: 'editar/:id', component: AgregarComponent },
      { path: 'buscar', component: BuscarComponent },
      { path: ':id', component: HeroeComponent },
      { path: '**', redirectTo: 'listado' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeoroesRoutingModule {}
