import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeDevisService } from 'src/app/services/demande-devis.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  ContactForm: FormGroup;
  errorMsg: any;
  error!: boolean;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _contact: DemandeDevisService,
  ) {
    this.ContactForm = this._fb.group({
      subject: this._fb.control(""),
      email: this._fb.control(""),
      name: this._fb.control(""),
      message: this._fb.control(""),
    })
  }

  OnFormSend() {
    if (this.ContactForm.valid) {
      const formData = {
        subject: this.ContactForm.value.subject,
        email: this.ContactForm.value.email,
        name: this.ContactForm.value.name,
        message: this.ContactForm.value.message,
      };
      
      this._contact.createDemandeDevis(formData).subscribe(
        (response: any) => {
          console.log(response);
          const savedData = {
            subject: this.ContactForm.value.subject,
            email: this.ContactForm.value.email,
            name: this.ContactForm.value.name,
            message: this.ContactForm.value.message,
          };
          this.ContactForm.reset();
          console.log(savedData);
          this._router.navigate(['']);
        },
        (error: any) => {
          console.log("contact not sent");
          console.error(error);
        }
      );
    }
  }
  
}
