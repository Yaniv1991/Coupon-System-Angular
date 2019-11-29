import { CouponType } from './CouponType';

export class Coupon {

  constructor(public id: number,
              public amount: number,
              public title: string,
              public description: string,
              public couponType: CouponType,
              public price: number,
              public startDate: Date,
              public endDate: Date,
              public image: string) {}

}

