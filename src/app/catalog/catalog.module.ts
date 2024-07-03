import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogProductComponent } from './catalog-product.component';
import { RouterModule } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CatalogRoutingModule } from './catalog-routing.module';



@NgModule({
  declarations: [ CatalogComponent,CatalogProductComponent, ProductDetailsComponent],
  exports: [CatalogComponent],
  imports: [
    CommonModule,
   CatalogRoutingModule
  ]
})
export class CatalogModule { }
