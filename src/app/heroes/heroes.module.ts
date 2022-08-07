import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeoroesRoutingModule } from './heoroes-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HeroesHomeComponent } from './pages/heroes-home/heroes-home.component';
import { ListadoHeroesComponent } from './pages/listado-heroes/listado-heroes.component';
import { MaterialModule } from '../material/material.module';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';

@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HeroesHomeComponent,
    ListadoHeroesComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
  ],
  imports: [
    CommonModule,
    HeoroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
  ],
})
export class HeroesModule {}
