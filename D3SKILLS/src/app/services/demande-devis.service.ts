import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeDevisService {

  constructor(private _webReqService: WebRequestService) { }

  createDemandeDevis(formData: any) : Observable<any>{
    return this._webReqService.post('api/demandeDevis', formData) 
  }

  getDemandeDevis(){
    return this._webReqService.get('api/demandeDevis')  ;
  }

  deleteDemandeDevis(id: string){
    return this._webReqService.delete(`api/demandeDevis/${id}`)
  }  
}
