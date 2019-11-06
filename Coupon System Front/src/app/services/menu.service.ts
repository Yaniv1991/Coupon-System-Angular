import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menuitem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient) { }

  public getMenuItems(): Observable<MenuItem[]> {
    return this.httpClient.get<MenuItem[]>('assets/json/menuitems.json');
  }
}
