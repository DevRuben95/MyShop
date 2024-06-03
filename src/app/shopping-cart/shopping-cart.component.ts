import { Component, OnInit } from '@angular/core';
import { CartItem } from './cart-item.ts';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnInit {

     cartItem: CartItem[] =[{
      imageUrl:'audifono.jpg',
      name:'audifono',
      price:50
     },
     {
      imageUrl:'monitor.jpg',
      name:'monitor',
      price:66
     },
     {
      imageUrl:'teclado.jpg',
      name:'teclado',
      price:589
     },
    ]
   constructor(){}

   ngOnInit(): void {}

   deleteItem(itemToDelete:CartItem):void {
             this.cartItem = this.cartItem.filter((item)=>item!==itemToDelete)
   }
}
