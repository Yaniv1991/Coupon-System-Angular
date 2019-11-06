import { Injectable } from '@angular/core';
import { CouponService } from './coupon.service';
import { Coupon } from '../models/coupon';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { HttpClient, HttpParams } from '@angular/common/http';
import { CouponType } from '../models/CouponType';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private service: CouponService;

  constructor(private http: HttpClient) { }

  public getCoupons(): Coupon[] {
    let methodCoupons: Coupon[];
    this.service.getCoupons(false).subscribe((couponsFromService) => {methodCoupons = couponsFromService; });
    return methodCoupons;
  }
  public getSingle(id: number): Coupon {
    this.service.getSingleCoupon(id).subscribe(single => single);
    return null;
  }
  public add(coup: Coupon) {
    this.service.addCoupon(coup);
  }
  public remove(coup: Coupon) {
    this.service.removeCoupon(coup);
  }
  public update(coup: Coupon) {
    this.service.updateCoupon(coup);
  }
  public getByType(type: CouponType): Coupon[] {
    this.service.getByType(type, false).subscribe(couponFromService => couponFromService );
    return null;
  }
  public getCompanyDetails(): Observable<Company[]> {
    return this.http.get<Company[]>('/assets/json/company.json', {withCredentials: true});
  }
  public getCompany(id: number): Observable<Company> {
    const str: string = id.toString();
    return this.http.get<Company>('/assets/json/company.json', {params: {['id']: str}, withCredentials: true});
  }
  public addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>('/assets/json/company.json', company, {withCredentials: true});
  }
  public updateCompany(company: Company): Observable<Company> {
    return this.http.put<Company>('/assets/json/company.json', company, {withCredentials: true});
  }
  public deleteCompany(company: Company): Observable<Company> {
    return this.http.delete<Company>('URL?id=' + company.id, {withCredentials: true});
  }
}
