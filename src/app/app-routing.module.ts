import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ProductDetailsComponent } from './catalog/product-details/product-details.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'catalog',
  pathMatch: 'full'
 // component: CatalogComponent

},
{
  path:'contact',
  loadChildren: ()=>
        import('./contact/contact.module').then(m=>m.ContactModule)
},
// {
// path:'contact',
// component: ContactComponent
// },
{
path:'**',
component: NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
