import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/models/menuitem';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[];
  constructor(private menuService: MenuService,
              private authenticationService: AuthenticationService,
              private router: Router
    ) {
    this.menuService.getMenuItems().subscribe(mi => {
      this.menuItems = mi;
   } , (error: Error) => {alert(error.message); });
   }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(mi => {
       this.menuItems = mi;
    } , (error: Error) => {alert(error.message); });
  }

  public logout() {
    this.authenticationService.logout(
      () => {
        this.router.navigateByUrl('');
      } );
  }

  public refresh() {
    location.reload(true);
  }
}
