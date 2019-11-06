import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CouponService } from 'src/app/services/coupon.service';
import { Coupon } from 'src/app/models/coupon';
import { CouponType } from 'src/app/models/CouponType';

@Component({
  selector: 'app-coupon-add-update',
  templateUrl: './coupon-add-update.component.html',
  styleUrls: ['./coupon-add-update.component.css']
})
export class CouponAddUpdateComponent implements OnInit {

  public coupon: Coupon;
  constructor(
    private activatedRoute: ActivatedRoute,
    private couponService: CouponService
  ) { }
  public add: boolean;
  private id: number;
  public couponTypes: CouponType[] = [CouponType.AUTOMOBILE, CouponType.CAMPING, CouponType.COMPUTER,
  CouponType.ELECTRICITY];
  ngOnInit() {

    // alert('I am working');
    this.id = this.activatedRoute.snapshot.params.id;
    // tslint:disable-next-line: triple-equals
    this.add = this.id == 0;
    if (!this.add) {
      this.couponService.getSingleCoupon(this.id).subscribe((coupon) => this.coupon = coupon);
    }
  }
  public submitChanges() {
    if (this.add) {
      this.couponService.addCoupon(this.coupon);
    }
    this.couponService.updateCoupon(this.coupon);
  }

}
