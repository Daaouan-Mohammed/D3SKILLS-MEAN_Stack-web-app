import { Component } from '@angular/core';
import { ReferencesService } from 'src/app/services/references.service';

@Component({
  selector: 'app-refs-page',
  templateUrl: './refs-page.component.html',
  styleUrls: ['./refs-page.component.scss']
})
export class RefsPageComponent {
  references: any;

  constructor(private _references: ReferencesService){}

  ngOnInit(){
    this._references.getReferences().subscribe((references: any) =>{
    this.references = references;
    console.log(references);
  })
  }
}
