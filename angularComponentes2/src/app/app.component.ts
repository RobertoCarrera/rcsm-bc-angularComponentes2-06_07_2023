import { Component } from '@angular/core';

// Como en este caso, la respuesta es fija, la hago constante
const securityQuestion: number = 5;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title: string = 'angularComponentes2';

  // Creo las variables a almacenar del formulario
  full_name: string = '';
  email: string = '';
  message: string = '';

  // Las guardaré como objeto
  forms: any[] = [];

  // Boolean que muestra, o no, el resultado de la información enviada
  informationSend: boolean = false;
  // Booleans para comprobar que los datos introducidos son correctos
  showQuestionError: boolean = false;
  showNameError: boolean = false;
  showEmailError: boolean = false;
  showMessageError: boolean = false;

// Método que comprueba que el valor introducido en la pregunta de seguridad es correcto
checkSecurityQuestion(answer: string): void {

  let correctAnswer: number = securityQuestion;
  let answerToNumber: number = +answer;

  // Si es correcto, llama a guardar los datos del formulario
  if(answerToNumber === correctAnswer) {

    this.showQuestionError = false;
    this.newContact();
  } else {
    // Si no es correcto, mostrará el p debajo del input que mmuestra el mensaje de error
    this.showQuestionError = true;
    this.informationSend = false;
  }
  }
  // Método que comprueba que haya, mínimo, un apellido y no sólo un nombre
  checkName(newName: string): void {

    if(newName.includes(' ')) {
      
      this.showNameError = false;
    } else {

      this.showNameError = true;
    }
  }
  // Método qeu comprueba que el correo contenga @ y .
  checkEmail(newEmail: string): void {

    let checklist: number = 0;
    if(newEmail.includes('@') && newEmail.includes('.')) {
    
        checklist++;
    }
    if (checklist === 1) {

      this.showEmailError = false;
    } else {
    
        this.showEmailError = true;
    }
  }
  // Método que comprueba que el mensaje no esté vacío
  checkMessage(newMessage: string): void {

    if(newMessage === '') {

      this.showMessageError = true;
    } else {

      this.showMessageError = false;
    }
  }
  // Método que guarda la info del formulario
  newContact(): void {
    // Antes de seguir, comprueba el nombre, email y mensaje
    this.checkName(this.full_name);
    this.checkEmail(this.email);
    this.checkMessage(this.message);

    // Si no salta ningún mensaje de error, guarda el contacto
    if(!this.showNameError && !this.showEmailError && !this.showMessageError) {
    
      this.forms.push({
        full_name: this.full_name,
        email: this.email,
        message: this.message
      });

    this.informationSend = true;
    } else {

      this.informationSend = false;
    }
  }
}
