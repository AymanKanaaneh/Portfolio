import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import emailjs from '@emailjs/browser'; 

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  form: FormGroup = this.fb.group({
    from_name: '',
    to_name: 'Admin',
    from_email: '',
    subject: '',
    message: ''
  });

  constructor(private fb: FormBuilder){}

  send(){
    emailjs.init('W4dcGC6tI-DMJNePq');
    emailjs.send('service_1fseysl', 'template_dvxn6mk', {
      from_name: this.form.value.from_name,
      to_name: this.form.value.to_name,
      from_email: this.form.value.from_email,
      subject: this.form.value.subject,
      message: this.form.value.message
    });
    this.form.reset();
    alert('Thank you for contacting me, I\'ll reach back to you in a short time.');

  }

}
