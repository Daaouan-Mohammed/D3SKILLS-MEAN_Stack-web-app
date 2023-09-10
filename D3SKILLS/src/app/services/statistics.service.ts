import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private _webReqService: WebRequestService, private _http:HttpClient) { }

  createStatistic(formData: FormData): Observable<any> {
    return this._webReqService.post('api/statistics', formData);
  }

  getStatistics(){
    return this._webReqService.get('api/statistics')  ;
  }

  editStatistic(id: string, formData: FormData){
    return this._webReqService.put(`api/statistics/${id}`, formData)  ;
  }

  deleteStatistic(id: string){
    return this._webReqService.delete(`api/statistics/${id}`)
  }
}
