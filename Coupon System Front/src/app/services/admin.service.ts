import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Company } from '../models/company';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private adminRootUrl = `httpClient://localhost:8080/Admin`;

  constructor(private httpClient: HttpClient) { }

  public addCompany(company: Company): Observable<Company> {
    return this.httpClient.post<Company>(this.adminRootUrl + "Company/Create", company, {withCredentials: true});
  }

  public getCompanyById(id: number): Observable<Company> {
    return this.httpClient.get<Company>('URL?id=' + id, {withCredentials: true} );
  }

  public getAllCompanies(): Observable<Company[]> {
    return this.httpClient.get<Company[]>('URL', {withCredentials: true} );
  }

  public updateCompany(company: Company): Observable<Company> {
    return this.httpClient.put<Company>(this.adminRootUrl + "/Company/Update", company, {withCredentials: true});
  }

  public deleteCompany(company: Company): Observable<Company> {
    return this.httpClient.delete<Company>( this.adminRootUrl + "/Company/Remove/" + company.id, {withCredentials: true});
  }


   public addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.adminRootUrl + '/Customer/Create', customer, {withCredentials: true});
  }

  public getCustomerById(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(this.adminRootUrl + '/Customer/Get?id=' + id, {withCredentials: true});
  }

  public getAllCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>('URL', {withCredentials: true} );
  }

  public updateCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.put<Customer>(this.adminRootUrl + '/Customer/Update', customer, {withCredentials: true});
  }
  
  public deleteCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.delete<Customer>(this.adminRootUrl + 'Customer/Remove/' + customer.id, {withCredentials: true});
  }
}
