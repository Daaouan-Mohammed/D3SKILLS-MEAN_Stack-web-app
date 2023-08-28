import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {

  constructor(private _webReqService: WebRequestService, private _http:HttpClient) { }

  createReference(formData: FormData): Observable<any> {
    return this._webReqService.post('api/references', formData);
  }

  getReferences(){
    return this._webReqService.get('api/references')  ;
  }

}
