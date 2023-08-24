import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _webReqService: WebRequestService) { }

  createService(title: string){
    return this._webReqService.post('api/services', {title}) //the title is just the payload
  }

 
}
