import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { CatalogServiceService } from '../catalog-service.service';
import { mapProductToCartItem } from '../.helper/map-product-to-cart-item.helper';
import { ShoppingcartService } from '../../shopping-cart/Shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  product!: Product | null;

  constructor(private route:ActivatedRoute, private catalogService:CatalogServiceService, private shoppingcartService:ShoppingcartService){}


  ngOnInit():void{
    // this.route.paramMap.subscribe(paramMap=>{const productId = paramMap.get('id')
    // });
    const ProductId = this.route.snapshot.paramMap.get('id');
    this.product = this.catalogService.getProduct(Number(ProductId));
  }



  addToCart(): void {
    if (this.product === null) {
      return;
    }

    const cartItem = mapProductToCartItem(this.product);
    this.shoppingcartService.addItem(cartItem);
  }


}
