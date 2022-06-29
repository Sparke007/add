import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AboutComponent } from './about/about.component';

import { AddtocartComponent } from './addtocart/addtocart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TshirtComponent } from './tshirts/tshirt.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';

import { EmployeeComponent } from './employee/employee.component';                   /*added*/
import { DepartmentComponent } from './department/department.component';


const routes: Routes = [
  {
    component:HomeComponent,
    path:""
  },
  {
    component:LoginComponent,
    path:"login123"

  },
  {
    component:WishlistComponent,
    path:"wishlis"

  },
  {
    component:ContactComponent,
    path:"contact"
  },
  {
    component:AboutComponent,
    path:"about"
  },
  {
    component:AddtocartComponent,
    path:"addtocart"
  },
  {
    component:CheckoutComponent,
    path:"checkout"
  },
  {
    component:TshirtComponent,
    path:'tshirt'
  },
  {
  component:SignupComponent,
  path:'signup'
  },
  {
    component:CartComponent,
    path:'cart'
  },
  {                                           /*added*/
    component: EmployeeComponent,
    path: 'employee'
  },
  {
    component: DepartmentComponent,
    path: 'department'
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
