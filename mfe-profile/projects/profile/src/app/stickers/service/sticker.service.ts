import { HttpClient } from '@angular/common/http';
import { Injectable, ViewChildren } from '@angular/core';
import { environment } from 'projects/profile/src/environments/environment';
import { Observable } from 'rxjs';
import { ISwags } from '../model/swags.model';

@Injectable({
  providedIn: 'root',
})

export class SwagService {
  
  data= {

    'swags':[
    
      {
        'id': 1,
        'name':'AWS Logo - Open Source',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 10,
        'image': 'https://d28eb6vuexefot.cloudfront.net/sticker-AWSOpenSource.png',
        'category': 'Swags'
      },
      {
        'id': 2,
        'name':'Amazon EKS + Flux - GitOps',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 100,
        'image': 'https://d28eb6vuexefot.cloudfront.net/sticker-EKSFlux.png',
        'category': 'Swags'
      },
      {
        'id': 3,
        'name':'Amazon EKS + KEDA',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 90,
        'image': 'https://d28eb6vuexefot.cloudfront.net/sticker-EKSKEDA.png',
        'category': 'Swags'
      },
      {
        'id': 4,
        'name':'AWS Logo Holografic',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 60,
        'image': 'https://d28eb6vuexefot.cloudfront.net/sticker-holografic.PNG',
        'category': 'Swags'
      },
      {
        'id': 5,
        'name':'AWS Bag',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 40,
        'image': 'https://d28eb6vuexefot.cloudfront.net/swag-AWSBag.png',
        'category': 'Acessories'
      },
      {
        'id': 6,
        'name':'AWS Bootle',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 80,
        'image': 'https://d28eb6vuexefot.cloudfront.net/swag-AWSBootle.png',
        'category': 'Acessories'
      },
      {
        'id': 7,
        'name':'AWS Socks',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 70,
        'image': 'https://d28eb6vuexefot.cloudfront.net/swag-AWSSocks.png',
        'category': 'Acessories'
      }
    
      ]
  
  }

  constructor(private http: HttpClient) { }

  public getSwags(): any {
    return this.data.swags
  }

  public postSwags(swags: ISwags): Observable<any> {
    return this.http.post(environment.urlApi, swags);
  }

}