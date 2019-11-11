import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-company-add-update',
  templateUrl: './company-add-update.component.html',
  styleUrls: ['./company-add-update.component.css']
})
export class CompanyAddUpdateComponent implements OnInit {

  @Input() public company: Company;
  constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
    private adminService: AdminService
  ) { }
    public add: boolean;
    private id: number;
  ngOnInit() {
    // alert('I am working');
    const str: string = this.activatedRoute.snapshot.params.id.toString();
    // tslint:disable-next-line: radix
    this.id = +str;
    // tslint:disable-next-line: triple-equals
    this.add = (this.id == 0);

    if (!this.add) {
      this.companyService.getCompany(this.id).subscribe((company) => this.company = company);
    }
  }
  public submitChanges() {
    if (this.add) {
      this.adminService.addCompany(this.company);
    }
    this.adminService.updateCompany(this.company);
  }

}
