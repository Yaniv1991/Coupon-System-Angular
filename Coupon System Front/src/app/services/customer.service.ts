import { Injectable } from '@angular/core';
import { CouponService } from './coupon.service';
import { Coupon } from '../models/coupon';
import { HttpClient } from '@angular/common/http';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
import { CouponType } from '../models/CouponType';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private service: CouponService;

  constructor(private http: HttpClient) { }

  public purchase(coup: Coupon) {
    this.service.purchase(coup);
  }

  public getCoupons(): Coupon[] {
    this.service.getCoupons(true).subscribe(couponsFromService => couponsFromService);
    return null;
  }

  public getByType(type: CouponType): Coupon[] {
    this.service.getByType(type, true).subscribe(couponList => couponList);
    return null;
  }

  public getByPrice(price: number): Coupon[] {
    this.service.getByPrice(price).subscribe(list => list);
    return null;
  }

  public getCustomerById(id: number): Observable<Customer> {
    return this.http.get<Customer>('..\assets\json\customer.json', {withCredentials: true});
  }

  public getCustomerDetails(): Observable<Customer[]> {
    return this.http.get<Customer[]>('..\assets\json\customer.json', {withCredentials: true});
  }
  public addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>('..\assets\json\customer.json', customer, {withCredentials: true});
  }
  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.http.put<Customer>('..\assets\json\customer.json', customer, {withCredentials: true});
  }
  public deleteCustomer(customer: Customer): Observable<Customer> {
    return this.http.delete<Customer>('URL?id=' + customer.id, {withCredentials: true});
  }

}
