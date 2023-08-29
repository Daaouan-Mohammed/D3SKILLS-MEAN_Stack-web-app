import { DialogRef } from '@angular/cdk/dialog';
import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GalerieService } from 'src/app/services/galerie.service';

@Component({
  selector: 'app-galerie-form',
  templateUrl: './galerie-form.component.html',
  styleUrls: ['./galerie-form.component.scss']
})
export class GalerieFormComponent {
  GalerieForm: FormGroup;
  errorMsg: any;
  selectedFile: any;
  loading: boolean = false; // Flag variable

  constructor(
    private _galerie: GalerieService,
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<GalerieFormComponent>,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.GalerieForm = this._fb.group({
      title: this._fb.control(""),
      description: this._fb.control(""),
      videoUrl: this._fb.control(""),
      file: this._fb.control(""),
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  OnSave() {
    if (this.GalerieForm.valid) {
      const formData = new FormData();
      formData.append("title", this.GalerieForm.value.title);
      formData.append("description", this.GalerieForm.value.description);
      formData.append("videoUrl", this.GalerieForm.value.videoUrl);
      if (this.selectedFile) {
        formData.append("image", this.selectedFile);
      }
      this.loading = true;
      if (this.data) {
        /* this._gig.updateGig(this.data.id, input).subscribe(({ data }) => {
           console.log(data);
           this._dialogRef.close();
           this._snackbar.openSnackBar('Gig updated successfully');
           this._gig.getGigs();
         })*/
      }
      else {
        this._galerie.createGalerie(formData).subscribe((response: any) => {
          console.log(response);
          console.log(response.imageUrl);
          const savedData = {
            title: this.GalerieForm.value.title,
            description: this.GalerieForm.value.description,
            videoUrl: this.GalerieForm.value.videoUrl,
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
