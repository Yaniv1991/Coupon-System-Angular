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
  public couponType: CouponType;
  public isCustomer: boolean;
  public purchased: boolean;
  constructor(private service: CouponService,
              private activatedRoute: ActivatedRoute,
              private router: Router
     ) {
   }

  ngOnInit() {
    this.isCustomer = (this.activatedRoute.snapshot.params.isCustomer === 'isCustomer'
    || this.activatedRoute.snapshot.params.myCoupons === 'myCoupons');
    if (this.activatedRoute.snapshot.params.myCoupons === 'myCoupons') {
      this.purchased = true;
      this.isCustomer = true;
    } else {
      this.purchased =  false;
    }
    this.service.getCoupons(this.purchased).subscribe(list => {this.coupons = list; });
  }
  public searchByType() {
    if (this.couponType.toString() === 'All') {
      this.service.getCoupons(this.purchased).subscribe(list => {this.coupons = list; });
    } else {
      this.service.getByType(this.couponType, this.isCustomer).subscribe((coupons) => {this.coupons = coupons; } );
    }
  }
  public searchByPrice() {
    this.service.getByPrice(this.price, this.isCustomer).subscribe((coupons) => {this.coupons = coupons; } );
  }

}
