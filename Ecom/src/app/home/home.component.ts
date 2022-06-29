import { Component, OnInit } from '@angular/core';
import { productd } from '../productd';
import { ProductService } from '../services/products.services';
import { CartService } from '../services/cart.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  result:productd[]=[];

  constructor(private order:ProductService, private cartService: CartService) { }

  ngOnInit(): void {

    this.order.getData().subscribe((data:productd[])=>{

      console.log(data);
      this.result=data;

      //for cart
      this.result.forEach((a:any)=>{
        Object.assign(a,{quantity:1,total:a.price})
      })

    });
  }
  addtocart(dt:any){
    this.cartService.addtoCart(dt);
  }
}
