import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaces';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    let heroImg;

    if (heroe.id != undefined) {
      heroImg = `assets/heroes/${heroe.id}.jpg`;
    } else {
      heroImg = 'assets/heroes/no-image.png';
    }

    return heroImg;
  }
}
