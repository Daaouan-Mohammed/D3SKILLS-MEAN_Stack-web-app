import { DialogRef } from '@angular/cdk/dialog';
import { Component ,Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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


  constructor(
    private _galerie: GalerieService,
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<GalerieFormComponent>,
//    private Activeroute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.GalerieForm = this._fb.group({
      title: this._fb.control(""),
      description: this._fb.control(""),
      file: this._fb.control(""),
    })
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  OnSave() {
    if (this.GalerieForm.valid) {
      if (this.data) {
    /*    this._services.updateService(this.data.id, input).subscribe(({ data }) => {
          console.log(data);
          this._dialogRef.close();
        //  this._services.getServices();
        })*/
        this._dialogRef.close();
      }
      else {
        this._galerie.createGalerie(this.GalerieForm.value).subscribe((response: any) => {
          console.log(response);
          this._dialogRef.close();
        //  this._services.getServices();
        })
      }
      
    }
  }
}
