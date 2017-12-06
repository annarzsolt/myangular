import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event as NavigationEvent } from '@angular/router';
import { Location } from '@angular/common';

import {MenuElement} from './models/MenuElement';
import {MenuService} from './services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {

  menuElements: MenuElement[];
  selectedMenuElement: MenuElement;
  route: string;

  constructor(
    private menuService: MenuService,
    private router: Router,
    private location: Location
  ) {
    router.events.subscribe((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.route = event.url;
      }
    });
  }

  getMenuElements(){
    this.menuService.getMenuElements().subscribe(menuElements => this.menuElements = menuElements)
  }

  ngOnInit() {
    this.getMenuElements();
  }

}
