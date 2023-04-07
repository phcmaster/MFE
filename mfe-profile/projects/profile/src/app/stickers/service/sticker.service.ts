import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/profile/src/environments/environment';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SwagService {
  
  data= {

    'swags':[
    
      {
        'id': 1,
        'name':'AWS 01',
        'event':'Kubecon',
        'description':'First try',
        'value': 10
      },
      {
        'id': 2,
        'name':'AWS 02',
        'event':'Kubecon',
        'description':'second',
        'value': 10
      },
      {
        'id': 3,
        'name':'AWS 03',
        'event':'Kubecon',
        'description':'tirdth',
        'value': 10
      }
    
      ]
  
  }



  constructor(private http: HttpClient) { }

  public getSwags(): any {
    return this.data.swags
  }

  public getStickerById(id: string): Observable<any> {
    return this.http.get(environment.urlApi + '/' + id);
  }

  public putSticker(swags: any): Observable<any> {
    return this.http.put(environment.urlApi, swags);
  }

}