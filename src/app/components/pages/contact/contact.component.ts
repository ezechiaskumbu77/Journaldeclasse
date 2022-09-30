import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_lvsa4ur', 'template_r5xmvro', e.target as HTMLFormElement, 'user_29s4lstLbqXve0caN7WH8')
      .then((result: EmailJSResponseStatus) => {
        alert("Envoyé avec succès.");
        location.href = 'https://testsecoundo-c70b6-default-rtdb.europe-west1.firebasedatabase.app/';
        console.log(result.text);
      }, (error) => {
        alert("Envoyé avec succès.");
        location.href = 'https://testsecoundo-c70b6-default-rtdb.europe-west1.firebasedatabase.app/';
        console.log(error.text);
      });
  }
  // Footer style
  classname = "";
  ftlogo = "assets/img/logo-2.png";
  ftshape = "assets/img/lines/01.png";
  ftshape2 = "assets/img/lines/02.png";
  ftshapeclass = "line-one";
  ftshape2class = "line-two";

  ngOnInit(): void {
  }


}
