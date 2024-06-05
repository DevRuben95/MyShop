import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { CatalogModule } from './catalog/catalog.module';
import { ContactComponent } from './contact/contact.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import {  RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './catalog/product-details/product-details.component';

 const routes: Routes =[
  {
    path:'catalog',
    component: CatalogComponent
  },
  {
    path:'catalog/:id',
    component: ProductDetailsComponent
  },
  {
    path:'contact',
    component: ContactComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactComponent,
    NavDrawerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShoppingCartModule,
    CatalogModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
