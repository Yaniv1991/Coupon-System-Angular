import { Injectable } from '@angular/core';
import { CouponService } from './coupon.service';
import { Coupon } from '../models/coupon';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { HttpClient } from '@angular/common/http';
import { single } from 'rxjs/operators';
import { CouponType } from '../models/CouponType';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private couponService: CouponService;

private companyRootUrl = 'http://localhost:8080/Company';

  constructor(private httpClient: HttpClient) { }

  public getCoupons(): Coupon[] {
    let methodCoupons: Coupon[];
    this.couponService.getCoupons(false).subscribe((couponsFromService) => {methodCoupons = couponsFromService; });
    return methodCoupons;
  }
  public getSingle(id: number): Coupon {
    this.couponService.getSingleCoupon(id).subscribe( singleCoupon => singleCoupon);
    return null; // ??
  }

  public addCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.companyRootUrl + '/Add', coupon, {withCredentials: true} );
  }
  public removeCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.delete<Coupon>(this.companyRootUrl + '/Remove?id=' + coupon.id, {withCredentials: true} );
  }
  public updateCoupon(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.put<Coupon>(this.companyRootUrl + '/Update', coupon, {withCredentials: true} );
  }


  public getByType(type: CouponType): Coupon[] {
    this.couponService.getByType(type, false).subscribe(couponFromService => couponFromService );
    return null;
  }
  public getCompanies(): Observable<Company[]> { // ?
    return this.httpClient.get<Company[]>('..\assets\json\company.json', {withCredentials: true});
  }
  public getCompany(id: number): Observable<Company> {
    // return this.httpClient.get<Company>('..\assets\json\company.json', {withCredentials: true});
    return this.httpClient.get<Company>(this.companyRootUrl + '/Get/' + id, {withCredentials: true} );
  }

}
