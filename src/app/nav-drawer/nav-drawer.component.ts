import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrl: './nav-drawer.component.css'
})
export class NavDrawerComponent {

  @Output() eventoMostrar = new  EventEmitter<void>();


  hideMenu()
  {
     this.eventoMostrar.emit();
  }

}
