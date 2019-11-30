import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';
import { PromptService } from 'src/app/services/prompt.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  @Input() public coupon: Coupon;
  @Input() public isCustomer: boolean;
  @Input() public purchased: boolean;
  public url: string;
  constructor(private couponService: CouponService,
              private companyService: CompanyService,
              private customerService: CustomerService,
              private promptService: PromptService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.coupon ? this.coupon.id : this.activatedRoute.snapshot.params.id;
    this.couponService.getSingleCoupon(id).subscribe(coupon => {
      this.coupon = coupon;
  // tslint:disable-next-line: triple-equals
      this.url = '/couponAddOrUpdate/' + this.coupon.id;
}, (error: Error) => {alert(error.message); } );
  }
  public promptMessage() {
   this.promptService.promptBeforeDelete('Delete Coupon ' + this.coupon.title , () => {this.deleteCoupon(); } );
  }
  public deleteCoupon() {
    this.companyService.removeCoupon(this.coupon)
    .subscribe(() => { this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/coupons/company'); });
  } , (error: Error) => {alert(error.message); } );
}
  public purchaseCoupon() {
    this.customerService.purchase(this.coupon)
    .subscribe(() => { this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigateByUrl('/coupons/isCustomer'); });
  } , (error: Error) => {alert(error.message); });
  }
}
