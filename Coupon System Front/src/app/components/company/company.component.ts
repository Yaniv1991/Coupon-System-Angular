import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService: CompanyService, private router: Router) { }
  @Input() public company: Company;
  public url: string;
  ngOnInit() {
    this.url = '../companyAddOrUpdate/' + this.company.id;
  }
  public deleteCompany() {
    this.companyService.deleteCompany(this.company);
  }
}
