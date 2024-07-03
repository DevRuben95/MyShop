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
    price:589,
    id:1
   },
   {
    imageUrl:'monitor.jpg',
    name:'monitor',
    price:10,
    id:2
   },
   {
    imageUrl:'teclado.jpg',
    name:'teclado',
    price:70,
    id:3
   },]

   addItemProduct(item: Product)
   {
      this.product.push(item);
   }
   getProduct(requestId: number): Product | null {
    return this.product.find((product) => product.id === requestId) || null;
  }

}
