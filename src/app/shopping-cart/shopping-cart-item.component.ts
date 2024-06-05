import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from './cart-item.ts';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrl: './shopping-cart-item.component.css'
})
export class ShoppingCartItemComponent implements OnInit{

  //  public cartItem: CartItem =
  //  {
  //    imageUrl: '450806_01.jpg',
  //    name: 'Auriculares',
  //    price: 50
  //  }
    @Input()cartItem!: CartItem;
     @Output()CartItemDelete =new EventEmitter<void>();

   constructor(){}
     ngOnInit(): void {}

     onDeleteClicked():void{

        this.CartItemDelete.emit();
     }

}
