import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes-home',
  templateUrl: './heroes-home.component.html',
  styleUrls: ['./heroes-home.component.css'],
})
export class HeroesHomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
