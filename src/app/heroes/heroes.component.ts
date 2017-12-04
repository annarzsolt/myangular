import {Component, OnInit} from "@angular/core";
import { mockHeroes } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

  heroes = mockHeroes;

  constructor() {
  }

  ngOnInit() {
  }

}
