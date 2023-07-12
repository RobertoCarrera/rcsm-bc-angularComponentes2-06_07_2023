import { Component } from '@angular/core';

const securityQuestion = 5;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'angularComponentes2';

  full_name = '';
  email = '';
  message = '';

  showElement: boolean = false;
  showQuestionError: boolean = false;
  showNameError: boolean = false;
  showEmailError: boolean = false;
  showMessageError: boolean = false;

  forms: any = [];

  checkSecurityQuestion(answer: string)
  {
    let correctAnswer = securityQuestion;
    let answerToNumber = +answer;

    if(answerToNumber == correctAnswer)
    {

      this.showQuestionError = false;
      this.newContact();
    }else{

      this.showQuestionError = true;
      this.showElement = false;
    }
  }

  checkName(newName: string)
  {

  if(newName.includes(' '))
    {

      this.showNameError = false;
    }else{

      this.showNameError = true;
    }
  }

  checkEmail(newEmail: string)
  {

    let checklist = 0;
    console.log(checklist);

    if((newEmail.includes('@')) && newEmail.includes('.'))
    {

      checklist++;
    }

    if (checklist == 1) {

      this.showEmailError = false;
    }else{

      this.showEmailError = true;
    }
    console.log(checklist);
  }

  checkMessage(newMessage: string){

    if(newMessage == '')
    {

      this.showMessageError = true;
    }else{

      this.showMessageError = false;
    }
  }

  newContact()
  {

    this.checkName(this.full_name);
    this.checkEmail(this.email);
    this.checkMessage(this.message);

    if((!this.showNameError) && (!this.showEmailError) && (!this.showMessageError))
    {

      this.forms.push(
        {
          name: this.full_name,
          email: this.email,
          message: this.message,
        }
      );
      
      this.showElement = true;
    }else{

      this.showElement = false;
    }
  }
}
