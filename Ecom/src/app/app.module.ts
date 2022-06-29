import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { AddtocartComponent } from './addtocart/addtocart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ModelsComponent } from './models/models.component';
import { TshirtComponent } from './tshirts/tshirt.component';
import { SignupComponent } from './signup/signup.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';


import { DepartmentComponent } from './department/department.component';
import { ShowDepComponent } from './department/show-dep/show-dep.component';                          /*added*/
import { AddEditDepComponent } from './department/add-edit-dep/add-edit-dep.component';
import { EmployeeComponent } from './employee/employee.component';
import { ShowEmpComponent } from './employee/show-emp/show-emp.component';
import { AddEditEmpComponent } from './employee/add-edit-emp/add-edit-emp.component';
import { SharedService } from './shared.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    WishlistComponent,
    ContactComponent,
    AboutComponent,
    AddtocartComponent,
    CheckoutComponent,
    ModelsComponent,
    TshirtComponent,
    SignupComponent,
    CartComponent,
    DepartmentComponent,
    ShowDepComponent,
    AddEditDepComponent,
    EmployeeComponent,
    ShowEmpComponent,
    AddEditEmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,             /*added*/
    ReactiveFormsModule         /*added*/
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
