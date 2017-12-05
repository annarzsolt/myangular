import { Injectable } from '@angular/core';

import {MenuElement} from '../models/MenuElement'
import {menuElements} from '../mock/mock-menu'

//Asynchronous Data import
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MenuService {

  constructor() { }

  getMenuElements(): Observable<MenuElement[]> {
    return of(menuElements);
  }
}
