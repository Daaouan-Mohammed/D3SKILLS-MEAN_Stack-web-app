import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReferencesService } from 'src/app/services/references.service';

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.scss']
})
export class ReferenceFormComponent implements OnInit{

  ReferenceForm: FormGroup;
  errorMsg: any;
  selectedFile: any;
  loading: boolean = false; // Flag variable
  shortLink: string = "";
  references: any;

  constructor(
    private _references: ReferencesService,
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<ReferenceFormComponent>,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.ReferenceForm = this._fb.group({
      title: this._fb.control(""),
      description: this._fb.control(""),
      file: this._fb.control(""),
    })
  }

  //to display data in update form
  ngOnInit(): void {
      this.ReferenceForm.patchValue(this.data);
  }
 
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  OnSave() {
    if (this.ReferenceForm.valid) {
      const formData = new FormData();
      formData.append("title", this.ReferenceForm.value.title);
      formData.append("description", this.ReferenceForm.value.description);
      if (this.selectedFile) {
        formData.append("image", this.selectedFile);
      }
      this.loading = true;

      if (this.data) {
         this._references.editReference(this.data._id, formData).subscribe(() =>{
          this._router.navigate(['/auth']);
         })
      }
      else {
        this._references.createReference(formData).subscribe((response: any) => {
          console.log(response);
          console.log(response.imageUrl);
          const savedData = {
            title: this.ReferenceForm.value.title,
            description: this.ReferenceForm.value.description,
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
