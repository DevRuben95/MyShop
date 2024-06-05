import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart-item.component';

@NgModule({
  declarations: [ShoppingCartComponent,ShoppingCartItemComponent],
  exports: [ShoppingCartComponent],
  imports: [
    CommonModule
  ]
})
export class ShoppingCartModule { }
