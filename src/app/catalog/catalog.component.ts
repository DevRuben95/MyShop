import { Component } from '@angular/core';
import { CatalogServiceService } from './catalog-service.service';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {


  get product():Product[] {

    const product = this.catalogServiceService.product

   if(this.route.snapshot.queryParamMap.get('OrderBy')=== "price")
    {
       product.sort((a,b)=> a.price - b.price)
    }

    return  product;
 }
  constructor(private catalogServiceService:CatalogServiceService, private route:ActivatedRoute){}





  // set Product()
  // {

  // }

}
