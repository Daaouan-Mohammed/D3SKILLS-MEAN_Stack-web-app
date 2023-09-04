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
  loading: boolean = false; // Flag variable
  shortLink: string = "";

  constructor(
    private _services: ServicesService,
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<ServiceFormComponent>,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.ServiceForm = this._fb.group({
      title: this._fb.control(""),
      description: this._fb.control(""),
      file: this._fb.control(""),
      subService1: this._fb.control(""),
      subService2: this._fb.control(""),
      subService3: this._fb.control(""),
      subService4: this._fb.control(""),
      subService5: this._fb.control(""),
      subService6: this._fb.control(""),
    })
  }

  //to display data in update form
  ngOnInit(): void{
    this.ServiceForm.patchValue(this.data);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  /* OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.selectedFile);
    this._services.upload(this.selectedFile).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
}*/

  OnSave() {
    if (this.ServiceForm.valid) {
      const formData = new FormData();
      formData.append("title", this.ServiceForm.value.title);
      formData.append("description", this.ServiceForm.value.description);
      formData.append("subService1", this.ServiceForm.value.subService1);
      formData.append("subService2", this.ServiceForm.value.subService2);
      formData.append("subService3", this.ServiceForm.value.subService3);
      formData.append("subService4", this.ServiceForm.value.subService4);
      formData.append("subService5", this.ServiceForm.value.subService5);
      formData.append("subService6", this.ServiceForm.value.subService6);
      if (this.selectedFile) {
        formData.append("image", this.selectedFile);
      }
      this.loading = true;
      
      if (this.data) {
        this._services.editService(this.data._id, formData).subscribe(() =>{
        this._router.navigate(['/auth']);
        })
      }
      else {
        this._services.createService(formData).subscribe((response: any) => {
          console.log(response);
          console.log(response.imageUrl);
          const savedData = {
            title: this.ServiceForm.value.title,
            description: this.ServiceForm.value.description,
            subService1: this.ServiceForm.value.subService1,
            subService2: this.ServiceForm.value.subService2,
            subService3: this.ServiceForm.value.subService3,
            subService4: this.ServiceForm.value.subService4,
            subService5: this.ServiceForm.value.subService5,
            subService6: this.ServiceForm.value.subService6,
            imageUrl: response.imageUrl // Assuming the server returns imageUrl in the response
          };
          console.log(savedData); // This will include the imageUrl
          console.log(savedData.imageUrl);
          this.loading = false;
          this._dialogRef.close();
          this._router.navigate(['/auth']);
        },
          (error: any) => {
            console.log("upload image not working");
            console.error(error);
            this.loading = false;
          }
        );
      }
    }
  }
}
