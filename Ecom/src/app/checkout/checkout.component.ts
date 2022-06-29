import { Component, OnInit } from '@angular/core';
import { productd } from '../productd';
import { CartService } from '../services/cart.services';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public product:any=[];
  public grandTotal!:number;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.product=res;
      this.grandTotal=this.cartService.getTotalPrice();
    })
  }

  removeItem(item:productd){
this.cartService.removeCartItem(item)
  }

  calculatePrice(){

    this.grandTotal=this.cartService.getTotalPrice();

  }

  emptycart(){
    this.cartService.removeAllCart();
  }

  inc(product:any){
    if(product.quantity!=10){
    product.quantity+=1;
    this.cartService.addtoCart(product);
    }
  }

  dec(product:any){
    if(product.quantity!=1){
    product.quantity=1;
    this.cartService.removeCartItem(product);
    }
  }



}
