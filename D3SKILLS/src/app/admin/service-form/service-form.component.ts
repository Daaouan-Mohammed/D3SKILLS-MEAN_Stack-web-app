import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent {

  ServiceForm: FormGroup;
  errorMsg: any;
  selectedFile: any;


  constructor(
    private _services: ServicesService,
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<ServiceFormComponent>,
    private _router: Router,
//    private Activeroute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.ServiceForm = this._fb.group({
      title: this._fb.control(""),
      description: this._fb.control(""),
      file: this._fb.control(""),
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  OnSave() {
    if (this.ServiceForm.valid) {
      if (this.data) {
    /*    this._services.updateService(this.data.id, input).subscribe(({ data }) => {
          console.log(data);
          this._dialogRef.close();
        //  this._services.getServices();
        })*/
      }
      else {
        this._services.createService(this.ServiceForm.value).subscribe((response: any) => {
          console.log(response);
          this._dialogRef.close();
        //  this._services.getServices();
        })
      }
      
    }
  }
}
