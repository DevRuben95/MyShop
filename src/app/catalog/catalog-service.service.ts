import { Injectable } from '@angular/core';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CatalogServiceService {

  constructor() { }

  product:Product[] =[{
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
   },]

   addItemProduct(item: Product)
   {
      this.product.push(item);
   }

}
