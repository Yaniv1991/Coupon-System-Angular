import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-add-update',
  templateUrl: './customer-add-update.component.html',
  styleUrls: ['./customer-add-update.component.css']
})
export class CustomerAddUpdateComponent implements OnInit {
  @Input() public customer: Customer;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CustomerService,
  ) { }
    public add: boolean;
    private id: number;
  ngOnInit() {
    // alert('I am working');
    this.id = this.activatedRoute.snapshot.params.id;
    // tslint:disable-next-line: triple-equals
    this.add = this.id == 0;

    if (!this.add) {
      this.service.getCustomerById(this.id).subscribe((customer) => this.customer = customer);
    }
  }
  public submitChanges() {
    if (this.add) {
      this.service.addCustomer(this.customer);
    }
    this.service.updateCustomer(this.customer);
  }
}
