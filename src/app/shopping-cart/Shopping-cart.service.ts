import { Injectable } from "@angular/core";
import { CartItem } from "./cart-item.ts";

@Injectable({
  providedIn:'root',
})
export class ShoppingcartService {

  items: CartItem[] =[//{
  //   imageUrl:'audifono.jpg',
  //   name:'audifono',
  //   price:50
  //  },
  //  {
  //   imageUrl:'monitor.jpg',
  //   name:'monitor',
  //   price:66
  //  },
  //  {
  //   imageUrl:'teclado.jpg',
  //   name:'teclado',
  //   price:589
//}
  ]

   get itemCount():number
   {
      return this.items.length
   }
 get total():number {
    // console.log("recalculo");
    return this.items.reduce((acc,{price} )=>acc+=price!,0)
}

addItem(item:CartItem): void {
   this.items =[...this.items,item];
    }

 deleteItem(itemToDelete:CartItem):void {

  this.items= this.items.filter
  ( (item)=>item!==itemToDelete)
  // console.log(this.cartItem);
 }
}
