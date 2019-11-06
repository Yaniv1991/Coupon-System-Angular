import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-add-update',
  templateUrl: './company-add-update.component.html',
  styleUrls: ['./company-add-update.component.css']
})
export class CompanyAddUpdateComponent implements OnInit {

  @Input() public company: Company;
  constructor(
    private activatedRoute: ActivatedRoute,
    private service: CompanyService,
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
      this.service.getCompany(this.id).subscribe((company) => this.company = company);
    }
  }
  public submitChanges() {
    if (this.add) {
      this.service.addCompany(this.company);
    }
    this.service.updateCompany(this.company);
  }

}
