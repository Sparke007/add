import { Component, OnInit } from '@angular/core';
import { productd } from '../productd';
import { CartService } from '../services/cart.services';

@Component({
  selector: 'app-addtocart',
  templateUrl: './addtocart.component.html',
  styleUrls: ['./addtocart.component.css']
})

export class AddtocartComponent implements OnInit {


    public product:any=[];
    public grandTotal!:number;
    public totalItem: number=0;


    constructor(private cartService: CartService) { }

    ngOnInit(): void {

      this.cartService.getProducts()
      .subscribe(res=>{
        this.product=res;
        this.grandTotal=this.cartService.getTotalPrice();
      })
      this.cartService.getProducts()
      .subscribe(res=>{
      this.totalItem = res.length;
    })

    }

    removeItem(item:any){
  this.cartService.removeCartItem(item)
    }

    emptycart(){
      this.cartService.removeAllCart();
    }

  }
