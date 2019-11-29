import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private adminService: AdminService,
    private router: Router
  ) { }
    public add: boolean;
    private id: number;
    private url: string;
  ngOnInit() {
    this.url = '/companies';
    const str: string = this.activatedRoute.snapshot.params.id.toString();
    // tslint:disable-next-line: radix
    this.id = +str;
    // tslint:disable-next-line: triple-equals
    this.add = (this.id == 0);

    if (!this.add) {
      this.adminService.getCompanyById(this.id).subscribe((company) => this.company = company);
    } else {
      this.company = new Company(this.id , '' , '', '');
    }
  }
  public submitChanges() {
    if (this.add) {
      this.adminService.addCompany(this.company).subscribe(() => {this.router.navigateByUrl(this.url); } );
    } else {
      this.adminService.updateCompany(this.company).subscribe(() => {this.router.navigateByUrl(this.url); } );
    }
  }

}
