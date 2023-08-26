import { DialogRef } from '@angular/cdk/dialog';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReferencesService } from 'src/app/services/references.service';

@Component({
  selector: 'app-reference-form',
  templateUrl: './reference-form.component.html',
  styleUrls: ['./reference-form.component.scss']
})
export class ReferenceFormComponent {
  ReferenceForm: FormGroup;
  errorMsg: any;
  selectedFile: any;


  constructor(
    private _services: ReferencesService,
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<ReferenceFormComponent>,
//    private Activeroute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.ReferenceForm = this._fb.group({
      title: this._fb.control(""),
      description: this._fb.control(""),
      file: this._fb.control(""),
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  OnSave() {
    if (this.ReferenceForm.valid) {
      if (this.data) {
    /*    this._services.updateService(this.data.id, input).subscribe(({ data }) => {
          console.log(data);
          this._dialogRef.close();
        //  this._services.getServices();
        })*/
        this._dialogRef.close();
      }
      else {
        this._services.createReference(this.ReferenceForm.value).subscribe((response: any) => {
          console.log(response);
          this._dialogRef.close();
        //  this._services.getServices();
        })
      }
      
    }
  }
}
