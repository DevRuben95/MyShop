import { Component, Output, EventEmitter } from '@angular/core';
import { ShoppingcartService } from '../shopping-cart/Shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private scService:ShoppingcartService) {}
  @Output() evento = new EventEmitter<boolean>()


   get itenCoubt():number
   {
     return this.scService.itemCount
   }
  showProduct():void{

    this.evento.emit(true);
  }
}
