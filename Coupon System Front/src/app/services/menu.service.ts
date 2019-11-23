import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MenuItem } from '../models/menuitem';
import { AuthenticationService } from './authentication.service';
import { ClientType } from '../models/clientType';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClient,
              private authenticationService: AuthenticationService) { }

  public getMenuItems(): Observable<MenuItem[]> {
    console.log('Menu items service is working');
    this.authenticationService.getClientType();
    return this.httpClient.get<MenuItem[]>(this.getMenuItemsByClientType());
  }

  private getMenuItemsByClientType(): string {
    if (this.authenticationService.getClientType() === ClientType.ADMIN) {
      return 'assets/json/menuitemsAdmin.json';
    }

    if (this.authenticationService.getClientType() === ClientType.COMPANY) {
      return 'assets/json/menuitemsCompany.json';
    }

    return 'assets/json/menuitemsCustomer.json';
  }
}
