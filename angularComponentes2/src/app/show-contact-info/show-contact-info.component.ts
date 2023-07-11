import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-contact-info',
  templateUrl: './show-contact-info.component.html',
  styleUrls: ['./show-contact-info.component.css']
})
export class ShowContactInfoComponent {

  @Input() data_form: any;

  constructor(){

    this.data_form = [];
  }
}
