import { Component } from '@angular/core';
import { Hero } from '../../models/hero';
import { HEROES } from 'src/app/services/mock-heros';
import { HeroService } from 'src/app/services/hero.service/hero.service';

@Component({
  selector: 'heros',
  templateUrl: './heros.html',
  styleUrls: ['./heros.scss']
})

export class HerosComponent {

  constructor(private heroService:HeroService){}
  heros = this.heroService.getHeroes();

  selectedHero?: Hero;
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
