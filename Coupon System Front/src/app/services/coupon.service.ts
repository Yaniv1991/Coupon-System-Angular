import { Injectable } from '@angular/core';
import { Coupon } from '../models/coupon';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CouponType } from '../models/CouponType';

@Injectable({
  providedIn: 'root'
})
export class CouponService {

    constructor(private httpClient: HttpClient) { }

    public getCoupons(clientLoggedIn: boolean = true): Observable<Coupon[]> {
      if (clientLoggedIn) {
        return this.httpClient.get<Coupon[]>('assets/json/coupon.json', {withCredentials: true});
      }
      return this.httpClient.get<Coupon[]>('http://localhost:8080/CouponSystemWeb/Coupons/Visitor/getAllCoupons', {withCredentials: true});
    }
    public getSingleCoupon(id: number): Observable<Coupon> {
      return this.httpClient.get<Coupon>('assets/json/Singlecoupon.json?id='+ id, {withCredentials: true});
    }
    public getByType(type: CouponType, customer: boolean): Observable<Coupon[]> {
      if (customer) {
        return this.httpClient.get<Coupon[]>('URL?category=' + type, {withCredentials: true} );
      }
      return this.httpClient.get<Coupon[]>('URL?category=' + type, {withCredentials: true} );
    }
    public getByPrice(price: number): Observable<Coupon[]> {
      return this.httpClient.get<Coupon[]>('URL?price=' + price, {withCredentials: true} );
    }
    public addCoupon(coupon: Coupon): Observable<Coupon> {
      return this.httpClient.post<Coupon>('URL', coupon, {withCredentials: true} );
    }
    public removeCoupon(coupon: Coupon): Observable<Coupon> {
      return this.httpClient.delete<Coupon>('URL?id=' + coupon.id, {withCredentials: true} );
    }
    public updateCoupon(coupon: Coupon): Observable<Coupon> {
      return this.httpClient.put<Coupon>('URL', coupon, {withCredentials: true} );
    }
    public purchase(coupon: Coupon): Observable<Coupon> {
      return this.httpClient.post<Coupon>('URL', coupon, {withCredentials: true} );
    }

}
