import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  constructor(private service: CompanyService, private client: HttpClient) { }
  public companies: Company[];
  private router: Router;

  ngOnInit() {
    // this.service.getCompanyDetails().subscribe((companies) => this.companies = companies);
    this.client.get<Company[]>('/assets/json/company.json').subscribe((companies) => {this.companies = companies; });
  }
  public goToAdd() {
    this.router.navigateByUrl('companyAddOrUpdate/add/0');
  }

}
