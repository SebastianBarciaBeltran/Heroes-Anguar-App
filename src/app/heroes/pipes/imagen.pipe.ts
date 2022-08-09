import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interfaces';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    let heroImg;

    if (!heroe.id && !heroe.alt_img) {
      heroImg = 'assets/no-image.png';
    } else if (heroe.alt_img) {
      heroImg = heroe.alt_img;
    } else {
      heroImg = `assets/heroes/${heroe.id}.jpg`;
    }

    return heroImg;
  }
}
