import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-customer-add-update',
  templateUrl: './customer-add-update.component.html',
  styleUrls: ['./customer-add-update.component.css']
})
export class CustomerAddUpdateComponent implements OnInit {
  @Input() public customer: Customer;
  constructor(
    private activatedRoute: ActivatedRoute,
    private customerService: CustomerService,
    private adminService: AdminService,
    private router: Router
  ) { }
    private add: boolean;
    private id: number;
    private url: string;
  ngOnInit() {
    this.url = '../customers';
    const str: string = this.activatedRoute.snapshot.params.id.toString();
    this.id = +str;
    // tslint:disable-next-line: triple-equals
    this.add = this.id === 0;

    if (!this.add) {
      this.customerService.getCustomerById(this.id).subscribe((customer) => this.customer = customer);
    } else {
      this.customer = new Customer(this.id, '' , '' , '' );
    }
  }
  public submitChanges() {
    if (this.add) {
      this.adminService.addCustomer(this.customer).subscribe(() => {this.router.navigateByUrl(this.url); } );
    } else {
      this.adminService.updateCustomer(this.customer).subscribe(() => {this.router.navigateByUrl(this.url); } );
    }
  }
}
