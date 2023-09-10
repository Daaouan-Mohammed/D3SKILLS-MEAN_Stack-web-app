import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { StatisticsService } from 'src/app/services/statistics.service';
import { GalerieFormComponent } from '../galerie-form/galerie-form.component';
import { DialogRef } from '@angular/cdk/dialog';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-statistic-form',
  templateUrl: './statistic-form.component.html',
  styleUrls: ['./statistic-form.component.scss']
})
export class StatisticFormComponent {
  StatisticForm: FormGroup;
  errorMsg: any;
  selectedFile: any;
  loading: boolean = false; // Flag variable
  statistic: any;

  constructor(
    private _statistics: StatisticsService,
    private _fb: FormBuilder,
    private _dialogRef: DialogRef<GalerieFormComponent>,
    private _router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.StatisticForm = this._fb.group({
      title: this._fb.control(""),
      statistic: this._fb.control(""),
    })
  }

  ngOnInit(): void {
      this.StatisticForm.patchValue(this.data);
  }

  OnSave() {
    if (this.StatisticForm.valid) {
      const formData = new FormData();
      formData.append("title", this.StatisticForm.value.title);
      formData.append("statistic", this.StatisticForm.value.statistic);
      
      this.loading = true;
      if (this.data) {
        this._statistics.editStatistic(this.data._id, formData).subscribe(() =>{
          this._router.navigate(['/auth']);
         })
      }
      else {
        this._statistics.createStatistic(formData).subscribe((response: any) => {
          console.log(response);
          const savedData = {
            title: this.StatisticForm.value.title,
            statistic: this.StatisticForm.value.this.statistic,
           };
          console.log(savedData);
          this.loading = false;
          this._dialogRef.close();
          this._router.navigate(['/auth']);
        },
          (error: any) => {
            console.error(error);
            this.loading = false;
          }
        );
      }
    }
  }

}
