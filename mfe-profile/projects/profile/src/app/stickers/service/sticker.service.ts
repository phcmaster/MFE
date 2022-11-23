import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'projects/profile/src/environments/environment';
import { Observable } from 'rxjs';
import { ISticker } from '../model/sticker.model';

@Injectable({
  providedIn: 'root',
})
export class StickerService {

  constructor(private http: HttpClient) { }

  public getStickers(): Observable<any> {
    return this.http.get(environment.urlApi);
  }

  public getStickerById(id: string): Observable<any> {
    return this.http.get(environment.urlApi + '/' + id);
  }

  public putSticker(sticker: ISticker): Observable<any> {
    return this.http.put(environment.urlApi, sticker);
  }

  public deleteStickerById(id: string): Observable<any> {
    return this.http.delete(environment.urlApi + '/' + id);
  }

}