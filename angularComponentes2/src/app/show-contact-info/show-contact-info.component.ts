// Importamos el input para poder mover los datos del padre al componente hijo
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-contact-info',
  templateUrl: './show-contact-info.component.html',
  styleUrls: ['./show-contact-info.component.css']
})
export class ShowContactInfoComponent {

  // Aquí se almacenará la info que envía el padre
  @Input() data_form: any;

  constructor(){

    this.data_form = [];
  }
}
