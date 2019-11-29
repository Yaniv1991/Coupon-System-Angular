import { Component, OnInit, Input } from '@angular/core';
import { CouponService } from 'src/app/services/coupon.service';
import { Coupon} from 'src/app/models/coupon';
import { Router, ActivatedRoute } from '@angular/router';
import { CouponType } from 'src/app/models/CouponType';

@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})
export class CouponsComponent implements OnInit {

  public coupons: Coupon[];
  public price: number;
  public type: CouponType;
  public isCustomer: boolean;
  public purchased: boolean;
  constructor(private service: CouponService, private activatedRoute: ActivatedRoute) {
   }

  ngOnInit() {
    this.isCustomer = (this.activatedRoute.snapshot.params.isCustomer === 'isCustomer'
    || this.activatedRoute.snapshot.params.myCoupons === 'myCoupons');
    if (this.activatedRoute.snapshot.params.myCoupons === 'myCoupons') {
      this.purchased = true;
      this.isCustomer = true;
      this.service.getCoupons(true).subscribe(purchasedCoupons => {this.coupons = purchasedCoupons; });
    } else {
      this.purchased =  false;
      this.service.getCoupons(false).subscribe(list => {this.coupons = list; });
    }
  }
  public searchByType() {
    // tslint:disable-next-line: prefer-const
    let selected: Coupon[];
    this.coupons.forEach(element => {
      // tslint:disable-next-line: triple-equals
      if (element.category == this.type) {
        selected.push(element);
      }
    });
  }
  public searchByPrice() {
    // tslint:disable-next-line: prefer-const
    let selected: Coupon[];
    this.coupons.forEach(element => {
      // tslint:disable-next-line: triple-equals
      if (element.price <= this.price) {
        selected.push(element);
      }
    });
  }
}
