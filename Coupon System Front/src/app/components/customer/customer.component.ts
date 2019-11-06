import { Component, OnInit, Input } from '@angular/core';

import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService, private router: Router) { }
  @Input() public customer: Customer;
  public url: string;

  ngOnInit() {
    this.url = '../customerAddOrUpdate/' + this.customer.id;
  }
  public deleteCustomer() {
    this.customerService.deleteCustomer(this.customer);
  }
  public updateCustomer() {
    this.router.navigateByUrl('addOrUpdate/update/customer/' + this.customer.id);
  }

}
