import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';
import { mockHeroes } from '../mock/mock-heroes';
import { MessageService } from '../../messages/services/message.service';

//Asynchronous Data import
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroService: fetched heroes');
    return of(mockHeroes);
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(mockHeroes.find(hero => hero.id === id));
  }

}
