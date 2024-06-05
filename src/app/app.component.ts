import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 showItems:boolean = false;
  showProducto()
  {
    this.showItems=!this.showItems;
  }
}
