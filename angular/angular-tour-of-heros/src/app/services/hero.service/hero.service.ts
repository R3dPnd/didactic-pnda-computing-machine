import { Injectable } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { HEROES } from '../mock-heros';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Hero[] {
    return HEROES;
  }
}
