import { MenuItem } from './menuitem';

export class Admin {

  constructor(public menu: MenuItem[]) {
    menu.push(
      {description: 'Company', routePath: 'company'},
      {description: 'Customer', routePath: 'customer'}
      );
   }

}
