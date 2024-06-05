import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.ts';
import {ShoppingcartService} from './Shopping-cart.service.js'
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {


  // private shoppingCartService = new ShoppingcartService();

    // cartItem:CartItem[]=this.shoppingCartService.items;
    get cartItems(): CartItem[]
    {
      return this.shoppingCartService.items;
    }
    // set inserCartItems(item:ca):void
    // {
    //    this.shoppingCartService.items;
    // }
     showItems=true;
     console = console;

     get total():number {
        return this.shoppingCartService.total
     }
   constructor( private shoppingCartService:ShoppingcartService){}

   ngOnInit(): void {}

    //  set addItem(item:CartItem) {
    //  this.shoppingCartService.items =[...this.cartItems,item];
    //  }

   deleteItem(itemToDelete:CartItem):void {

     this.shoppingCartService.deleteItem(itemToDelete);
    // console.log(this.cartItem);
   }
   togleItemVisibility(){
    this.showItems=!this.showItems;

   }


}
