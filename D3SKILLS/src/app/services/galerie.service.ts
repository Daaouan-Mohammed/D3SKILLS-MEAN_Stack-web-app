import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class GalerieService {

  constructor(private _webReqService: WebRequestService) { }

  createGalerie(title: string){
    return this._webReqService.post('api/galerie', {title}) //the title is just the payload
  }
}
