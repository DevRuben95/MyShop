import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog.component';
import { CatalogProductComponent } from './catalog-product.component';



@NgModule({
  declarations: [ CatalogComponent,CatalogProductComponent,],
  exports: [CatalogComponent],
  imports: [
    CommonModule
  ]
})
export class CatalogModule { }
