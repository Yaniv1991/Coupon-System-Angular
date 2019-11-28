import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CouponType } from '../models/CouponType';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

  private visitorRootUrl = `http://localhost:8080/Rest/Visitor`;
private customerRootUrl = `http://localhost:8080/Rest/Customer`;
private companyRootUrl = `http://localhost:8080/Rest/Company`;

    constructor(private httpClient: HttpClient) { }

    public getCoupons(clientLoggedIn: boolean = false): Observable<Coupon[]> {
      if (clientLoggedIn) {
        return this.httpClient.get<Coupon[]>(this.customerRootUrl + '/getAllPurchasedCoupons', {withCredentials: true});
      }
      return this.httpClient.get<Coupon[]>(this.visitorRootUrl + '/GetAllCoupons', {withCredentials: true});
    }
    public getSingleCoupon(id: number): Observable<Coupon> {
      return this.httpClient.get<Coupon>(this.visitorRootUrl + `/GetOne/` + id, {withCredentials: true});
    }
    public getByType(type: CouponType, customer: boolean): Observable<Coupon[]> {
      if (customer) {
        return this.httpClient.get<Coupon[]>(this.customerRootUrl + '/getAllPurchasedCoupons/' + type, {withCredentials: true} );
      }
      return this.httpClient.get<Coupon[]>(this.visitorRootUrl + '/GetAllCoupons/' + type, {withCredentials: true} );
    }

    public getByPrice(price: number, isCustomer: boolean): Observable<Coupon[]> {
      const priceContextPath = '/GetAllCouponsByPrice?price=';
      if (isCustomer) {
        return this.httpClient.get<Coupon[]>(this.customerRootUrl + priceContextPath + price, {withCredentials: true} );
      }
      return this.httpClient.get<Coupon[]>(this.visitorRootUrl + priceContextPath + price, {withCredentials: true} );
    }
}
