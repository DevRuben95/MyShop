import { Component } from '@angular/core';
import { CatalogServiceService } from './catalog-service.service';
import { Product } from './product';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {

  constructor(private catalogServiceService:CatalogServiceService){}

  get product():Product[] {
    return this.catalogServiceService.product
 }

  // set Product()
  // {

  // }

}
