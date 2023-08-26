import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  constructor(private _webReqService: WebRequestService) { }

  createReference(title: string){
    return this._webReqService.post('api/references', {title}) //the title is just the payload
  }
}
