import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private httpClient: HttpClient) { }

  public createCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>('URL', company, {withCredentials: true} );
  }
  public getCompanyById(id: number): Observable<Company> {
    return this.httpClient.get<Company>('URL?id=' + id, {withCredentials: true} );
  }
  public getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>('URL', {withCredentials: true} );
  }
  public updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>('URL', company, {withCredentials: true} );
  }
  public deleteCompany(company: Company): Observable<Company> {
    return this.httpClient.delete<Company>('URL?id=' + company.id, {withCredentials: true} );
  }

  public createCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>('URL', customer, {withCredentials: true} );
  }
  public getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>('URL?id=' + id, {withCredentials: true} );
  }
  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('URL', {withCredentials: true} );
  }
  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>('URL', customer, {withCredentials: true} );
  }
  public deleteCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.delete<Customer>('URL?id=' + customer.id, {withCredentials: true} );
  }


}
