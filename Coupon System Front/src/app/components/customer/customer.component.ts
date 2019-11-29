import { Component, OnInit, Input } from '@angular/core';

import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { PromptService } from 'src/app/services/prompt.service';
import { ResourceLoader } from '@angular/compiler';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor(private customerService: CustomerService,
              private adminService: AdminService,
              private promptService: PromptService,
              private router: Router) { }
  @Input() public customer: Customer;
  public url: string;

  ngOnInit() {
    this.url = '/customerAddOrUpdate/' + this.customer.id;
  }
  public promptMessage() {
    this.promptService.promptBeforeDelete('Delete Customer ' + this.customer.name , () => {this.deleteCustomer(); } );
  }
  public deleteCustomer() {
    this.adminService.deleteCustomer(this.customer)
    .subscribe(() => { this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/customers']); });
    });
  }
}
