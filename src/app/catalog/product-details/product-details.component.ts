import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
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

  constructor(private route:ActivatedRoute, private catalogService:CatalogServiceService, private shoppingcartService:ShoppingcartService,private router:Router){}


  ngOnInit():void{
    // this.route.paramMap.subscribe(paramMap=>{const productId = paramMap.get('id')
    // });
    const ProductId = this.route.snapshot.paramMap.get('id');  // snapshot solo se puede utilzar en el metodo ngOnInit y solo si el paramtro id
    this.product = this.catalogService.getProduct(Number(ProductId)); //(que es parte de una ruta) no esta asociados a dos componentes a la vez en la
                                                                      //configuacion de rutas componetes, por que el router utiliza el componente y por
                                                                         //tanto cuando se cargue otro compnente con ese mismo id no llamara al mismo ngOnInit
                                                                        // donde se encuentra ese snapshot
     if(this.product === null)
       {
         this.router.navigate(['catalog'])
       }
  }



  addToCart(): void {
    if (this.product === null) {
      return;
    }

    const cartItem = mapProductToCartItem(this.product);
    this.shoppingcartService.addItem(cartItem);
  }


}
