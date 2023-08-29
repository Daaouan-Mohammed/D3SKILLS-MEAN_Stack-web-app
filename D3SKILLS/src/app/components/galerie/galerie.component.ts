import { Component } from '@angular/core';
import { GalerieService } from 'src/app/services/galerie.service';

@Component({
  selector: 'app-galerie',
  templateUrl: './galerie.component.html',
  styleUrls: ['./galerie.component.scss'],
})
export class GalerieComponent {
  galerie: any;

  constructor(private _galerie: GalerieService){}

  ngOnInit(){
    this._galerie.getGalerie().subscribe((galerie: any) =>{
    this.galerie = galerie;
    console.log(galerie);
  })
  }
}
