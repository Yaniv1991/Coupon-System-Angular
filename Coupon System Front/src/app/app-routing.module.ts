import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { LoginComponent } from './components/login/login.component';
import { CompanyAddUpdateComponent } from './components/company-add-update/company-add-update.component';
import { CouponAddUpdateComponent } from './components/coupon-add-update/coupon-add-update.component';
import { CustomerAddUpdateComponent } from './components/customer-add-update/customer-add-update.component';


const routes: Routes = [
  {path: 'home', component: LoginComponent},
  {path: 'coupons/:isCustomer', component: CouponsComponent},
  {path: 'coupons/coupon/:id', component: CouponComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'companies', component: CompaniesComponent},
  {path: 'companyAddOrUpdate/:id', component: CompanyAddUpdateComponent},
  {path: 'couponAddOrUpdate/:id', component: CouponAddUpdateComponent},
  {path: 'customerAddOrUpdate/:id', component: CustomerAddUpdateComponent},
  {path: '', component: LoginComponent},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
