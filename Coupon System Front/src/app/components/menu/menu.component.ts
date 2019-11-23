import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';
import { MenuItem } from 'src/app/models/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {

  public menuItems: MenuItem[];
  constructor(private menuService: MenuService, private changeDetectorRef: ChangeDetectorRef) {
    this.menuService.getMenuItems().subscribe(mi => {
      this.menuItems = mi;
   });
   }

  ngOnInit() {
    this.menuService.getMenuItems().subscribe(mi => {
       this.menuItems = mi;
    });
  }

  public refresh() {
    location.reload();
  }
}
