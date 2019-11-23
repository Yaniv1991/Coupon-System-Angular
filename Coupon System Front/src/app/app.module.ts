import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from '../assets/appcomponent_bk/app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CouponComponent } from './components/coupon/coupon.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { MenuComponent } from './components/menu/menu.component';
import { Page404Component } from './components/page404/page404.component';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/company.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { CompaniesComponent } from './components/companies/companies.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CustomerAddUpdateComponent } from './components/customer-add-update/customer-add-update.component';
import { CompanyAddUpdateComponent } from './components/company-add-update/company-add-update.component';
import { CouponAddUpdateComponent } from './components/coupon-add-update/coupon-add-update.component';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    LayoutComponent,
    CouponComponent,
    CouponsComponent,
    MenuComponent,
    Page404Component,
    HomeComponent,
    CompanyComponent,
    HeaderComponent,
    FooterComponent,
    CustomerComponent,
    CustomersComponent,
    CompaniesComponent,
    LoginComponent,
    CustomerAddUpdateComponent,
    CompanyAddUpdateComponent,
    CouponAddUpdateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
