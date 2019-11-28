import { Component, OnInit, Input } from '@angular/core';
import { Company } from 'src/app/models/company';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { PromptService } from 'src/app/services/prompt.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private companyService: CompanyService,
              private adminService: AdminService,
              private promptService: PromptService,
              private router: Router) { }
  @Input() public company: Company;
  public url: string;
  ngOnInit() {
    this.url = '../companyAddOrUpdate/' + this.company.id;
  }
  public promptMessage() {
    this.promptService.promptBeforeDelete('Delete Company ' + this.company.name, () => {this.deleteCompany(); } );
  }
  public deleteCompany() {
    this.adminService.deleteCompany(this.company).subscribe(() => {location.reload(true); });
  }
}
