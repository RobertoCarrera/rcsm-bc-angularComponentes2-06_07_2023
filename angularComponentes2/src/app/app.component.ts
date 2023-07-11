import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularComponentes2';

  name = '';
  email = '';
  message = '';
  securityQuestion = 5;

  showElement: boolean = false;

  forms: any = [];

  newContact(){

    this.forms.push(
      {
        name: this.name,
        email: this.email,
        message: this.message,
        securityQuestion: this.securityQuestion
      }
    );

    this.showElement = true;
  }
}
