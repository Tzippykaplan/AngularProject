import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  products:[]=[];
  constructor( private router: Router, ) {}

  ngOnInit() {
      this.products = JSON.parse(sessionStorage.getItem("cart") || "[]")
      console.log(this.products);
      
  }
  payment(){
    this.router.navigate(['/payLogin', { id: 123 }]);
  }
subQuantity(product:any){
  this.products= this.getCartFromSession();
  this.products.map((item:any)=>item.gift.id==product.gift.id?item.quantity
>1?item.quantity--:this.deleteFromCart(item):'')
sessionStorage.setItem("cart",JSON.stringify( this.products))
  }
addQuantity(product:any){
  this.products= this.getCartFromSession();
  this.products.map((item:any)=>item.gift.id==product.gift.id?item.quantity++:'')
    sessionStorage.setItem("cart",JSON.stringify(this.products))
    
  }
  getCartFromSession():any{
  return JSON.parse(sessionStorage.getItem("cart")||"[]")

  }
  deleteFromCart(deleteProduct:any){
let cart= this.getCartFromSession();
cart=cart.filter((item:any)=>item.gift.id!=deleteProduct.gift.id)
sessionStorage.setItem("cart",JSON.stringify( cart))
this.products=this.getCartFromSession();
  }
}
