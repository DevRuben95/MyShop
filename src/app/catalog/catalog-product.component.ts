import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from './product';


@Component({
  selector: 'app-catalog-product',
  templateUrl: './catalog-product.component.html',
  styleUrl: './catalog-product.component.css'
})
export class CatalogProductComponent {

@Input() product!:Product;

 @Output() itemProduct = new EventEmitter<void>();



 addProduct(){
    this.itemProduct.emit();
 }
}
