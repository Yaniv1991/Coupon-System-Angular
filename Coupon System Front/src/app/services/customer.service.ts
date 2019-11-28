import { Injectable } from '@angular/core';
import { CouponService } from './coupon.service';
import { Coupon } from '../models/coupon';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { Company } from '../models/company';
import { CouponType } from '../models/CouponType';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private couponService: CouponService;

  private customerRootUrl = `http://localhost:8080/Rest/Customer`;
  private adminRootUrl = `http://localhost:8080/Rest/Admin`;

constructor(private httpClient: HttpClient) { }

  public purchase(coupon: Coupon): Observable<Coupon> {
    return this.httpClient.post<Coupon>(this.customerRootUrl + `/Purchase`, coupon, {withCredentials: true} );
  }

  public getCoupons(): Coupon[] {
    this.couponService.getCoupons(true).subscribe(couponsFromService => couponsFromService);
    return null;
  }

  public getByType(type: CouponType): Coupon[] {
    this.couponService.getByType(type, true).subscribe(couponList => couponList);
    return null;
  }

  public getByPrice(price: number): Coupon[] {
    this.couponService.getByPrice(price , true).subscribe(list => list);
    return null;
  }

  public getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.adminRootUrl + '/Customer/Get?id=' + id, {withCredentials: true});
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.adminRootUrl + '/Customer/GetAll', {withCredentials: true} );
  }

}
