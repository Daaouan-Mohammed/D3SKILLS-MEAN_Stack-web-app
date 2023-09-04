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
    return this._webReqService.post('api/services', formData)
  }

  getServices(){
    return this._webReqService.get('api/services')  ;
  }

  editService(id: string, formData: FormData){
    return this._webReqService.put(`api/services/${id}`, formData)  ;
  }

  deleteService(id: string){
    return this._webReqService.delete(`api/services/${id}`)
  }

  /*subServices:

  createSubService(serviceId: string, formData: FormData): Observable<any> {
    return this._webReqService.post(`api/services/${serviceId}/subServices`, formData)
  }

  getSubServices(serviceId: string){
    return this._webReqService.get(`api/services/${serviceId}/subServices`)  ;
  }
 
  deleteSubService(serviceId: string, id: string){
    return this._webReqService.delete(`api/services/${serviceId}/subServices/${id}`)
  }*/
}
