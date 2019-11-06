import { Component, OnInit } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/models/menuitem';
import { LoginComponent } from '../login/login.component';
import { ClientType } from 'src/app/models/clientType';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
providers: [
  LoginComponent
]
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[];

  constructor(private menuService: MenuService, private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(mi => { this.menuItems = mi;
                                                      this.menuItems = this.menuItems.concat(this.getMenuItemsByClientType());
    });
  }

  private getMenuItemsByClientType(): MenuItem[] {
    const result: MenuItem[] = [];
    if (this.authenticationService.getClientType() === ClientType.ADMIN) {

        result.push({ description: 'Companies', routePath: 'companies' });
        result.push({ description: 'Customers', routePath: 'customers' });

      }
    if (this.authenticationService.getClientType() === ClientType.COMPANY) {
        result.push({description: 'My Coupons', routePath: 'coupons/company'});
      }
    if (this.authenticationService.getClientType() === ClientType.CUSTOMER) {
      result.push({description: 'Coupons', routePath: 'coupons/customer'});
    }
    return result;

  }
}
