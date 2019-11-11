import { Component, OnInit, Input } from '@angular/core';
import { Coupon } from 'src/app/models/coupon';
import { CouponService } from 'src/app/services/coupon.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from 'src/app/services/company.service';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.component.html',
  styleUrls: ['./coupon.component.css']
})
export class CouponComponent implements OnInit {

  @Input() public coupon: Coupon;
  @Input() public isCustomer: boolean;
  private router: Router;
  public url: string;
  constructor(private couponService: CouponService,
    private companyService: CompanyService,
    private customerService: CustomerService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.coupon ? this.coupon.id : this.activatedRoute.snapshot.params.id;
    // this.service.getSingleCoupon(id).subscribe(coupon => { this.coupon = coupon; });

    // For early stage production only!!! >_<
    this.couponService.getCoupons(this.isCustomer).subscribe(coupons => {
  // tslint:disable-next-line: triple-equals
  this.coupon = coupons.find(c => id == c.id);
  this.url = '/couponAddOrUpdate/' + this.coupon.id;
});
  }
  public deleteCoupon() {
    this.companyService.removeCoupon(this.coupon);
  }
  public purchaseCoupon() {
    this.customerService.purchase(this.coupon);
  }
  public updateCoupon() {
    this.router.navigateByUrl('url');
  }

}
