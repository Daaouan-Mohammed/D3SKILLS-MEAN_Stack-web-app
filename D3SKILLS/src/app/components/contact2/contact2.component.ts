import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DemandeDevisService } from 'src/app/services/demande-devis.service';

@Component({
  selector: 'app-contact2',
  templateUrl: './contact2.component.html',
  styleUrls: ['./contact2.component.scss']
})
export class Contact2Component {
  DemandeDevisForm: FormGroup;
  errorMsg: any;
  error!: boolean;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _demandeDevis: DemandeDevisService,
  ) {
    this.DemandeDevisForm = this._fb.group({
      subject: this._fb.control(""),
      email: this._fb.control(""),
    })
  }

  OnFormSend() {
    if (this.DemandeDevisForm.valid) {
      const formData = {
        subject: this.DemandeDevisForm.value.subject,
        email: this.DemandeDevisForm.value.email,
      };
      
      this._demandeDevis.createDemandeDevis(formData).subscribe(
        (response: any) => {
          console.log(response);
          const savedData = {
            subject: this.DemandeDevisForm.value.subject,
            email: this.DemandeDevisForm.value.email,
          };
          this.DemandeDevisForm.reset();
          console.log(savedData);
          this._router.navigate(['']);
        },
        (error: any) => {
          console.log("Demande not sent");
          console.error(error);
        }
      );
    }
  }
  
}
