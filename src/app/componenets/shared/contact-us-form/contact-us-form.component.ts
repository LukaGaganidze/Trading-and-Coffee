import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.scss'],
})
export class ContactUsFormComponent {
  contactUsForm!: FormGroup;
  submitted = false;

  constructor() {
    this.contactUsForm = new FormGroup({
      firstname: new FormControl(null, [Validators.required]),
      lastname: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      industry: new FormControl(null, [Validators.required]),
    });
  }

  formSubmition() {
    this.submitted = true;
    this.contactUsForm.reset();
  }
}
