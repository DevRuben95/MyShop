import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product';
import { ShoppingcartService } from '../shopping-cart/Shopping-cart.service';
import { mapProductToCartItem } from './.helper/map-product-to-cart-item.helper';


@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrl: './catalog-product.component.css'
})
export class CatalogProductComponent {

@Input() product!:Product;

//  @Output() itemProduct = new EventEmitter<void>();

   constructor(private scService:ShoppingcartService){ }
  //  this.itemProduct.emit();
 addProduct():void{
  const cartItem =mapProductToCartItem(this.product);
    this.scService.addItem(cartItem);
 }
}
// function mapProductToCartItem(product: Product) {
//   throw new Error('Function not implemented.');
// }

