import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { CatalogModule } from './catalog/catalog.module';
import { ContactComponent } from './contact/contact.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
// import {  RouterModule, Routes } from '@angular/router';
// import { CatalogComponent } from './catalog/catalog.component';
// import { ProductDetailsComponent } from './catalog/product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';


//  const routes: Routes =[
//    {
//        path: '',
//        redirectTo: 'catalog',
//        pathMatch: 'full'
//       // component: CatalogComponent

//    },
//    {
//     path:'catalog',
//     component: CatalogComponent
//    },
//   {
//     path:'catalog/products/:id',
//     component: ProductDetailsComponent
//   },
//   {
//     path:'contact',
//     component: ContactComponent
//   },
//   {
//     path:'**',
//     component: NotFoundComponent
//   }
// ]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    //ContactComponent,
    NavDrawerComponent,
    NotFoundComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    ShoppingCartModule,
    CatalogModule,
    AppRoutingModule,

   // RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
