import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalerieService {

  constructor(private _webReqService: WebRequestService) { }

  createGalerie(formData: FormData) : Observable<any>{
    return this._webReqService.post('api/galerie', formData) 
  }

  getGalerie(){
    return this._webReqService.get('api/galerie')  ;
  }

  deleteGalerie(id: string){
    return this._webReqService.delete(`api/galerie/${id}`)
  }
}
