import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { CustomerService } from 'src/app/services/customer.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private adminService: AdminService, private client: HttpClient, private router: Router) { }

  public customers: Customer[];

  ngOnInit() {
    this.adminService.getAllCustomers().subscribe((customers) => this.customers = customers) ;
    // this.service.getCustomerDetails().subscribe((customers) => this.customers = customers);
    // tslint:disable-next-line: max-line-length
    // this.client.get<Customer[]>('/assets/json/customer.json').subscribe((customers) => {this.customers = customers; });
  }
  public doStuff() {
    this.router.navigateByUrl('addOrUpdate/add/cutomer/0');
  }

}
