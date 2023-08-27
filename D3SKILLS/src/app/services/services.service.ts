import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private _webReqService: WebRequestService, private _http:HttpClient) { }

  createService(formData: FormData): Observable<any> {
    return this._webReqService.post('api/services', formData) //the title is just the payload
  }

 
}
