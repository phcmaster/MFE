import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'projects/profile/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class SwagService {
  
  data= {

    'swags':[
    
      {
        'id': 1,
        'name':'AWS Logo T-Shirt – Squid Ink',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 10,
        'image': 'https://www.awsgearshop.com/media/catalog/product/1/4/1452901_1.png?width=1000&height=1000&store=awsgearshop&image-type=image',
        'category': 'Apparel'
      },
      {
        'id': 2,
        'name':'AWS Full Zip Hoodie - Blue',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 100,
        'image': 'https://www.awsgearshop.com/media/catalog/product/1/5/1538650_z.jpg?width=524&height=524&store=awsgearshop&image-type=weltpixel_hover_image',
        'category': 'Acessories'
      },
      {
        'id': 3,
        'name':'AWS Full Zip Hoodie - Grey',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 90,
        'image': 'https://www.awsgearshop.com/media/catalog/product/1/4/1452927_1.png?width=1000&height=1000&store=awsgearshop&image-type=image',
        'category': 'Apparel'
      },
      {
        'id': 4,
        'name':'AWS Nylon Dog Leash – Orange',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 60,
        'image': 'https://www.awsgearshop.com/media/catalog/product/1/4/1452933_1.png?width=1000&height=1000&store=awsgearshop&image-type=image',
        'category': 'Pets'
      },
      {
        'id': 5,
        'name':'AWS Toddler Building Block T-Shirt – Blue',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 40,
        'image': 'https://www.awsgearshop.com/media/catalog/product/1/5/1535910_3.jpg?width=1000&height=1000&store=awsgearshop&image-type=image',
        'category': 'Kids'
      },
      {
        'id': 6,
        'name':'AWS Toddler Smiley T-Shirt – Grey',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 80,
        'image': 'https://www.awsgearshop.com/media/catalog/product/1/5/1535906_3.jpg?width=1000&height=1000&store=awsgearshop&image-type=image',
        'category': 'Kids'
      },
      {
        'id': 7,
        'name':'AWS Logo Golf Hat - Grey',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 70,
        'image': 'https://www.awsgearshop.com/media/catalog/product/1/5/1536925_1.png?width=1000&height=1000&store=awsgearshop&image-type=image',
        'category': 'Acessories'
      },
      {
        'id': 8,
        'name':'AWS Established Journal - Purple',
        'event':'Kubecon',
        'description':'Official product designed by AWS',
        'value': 20,
        'image': 'https://www.awsgearshop.com/media/catalog/product/1/5/1536670_purple_aws_journal_4.jpg?width=1000&height=1000&store=awsgearshop&image-type=image',
        'category': 'Acessories'
      }
    
      ]
  
  }

  constructor(private http: HttpClient) { }

  public getSwags(): any {
    return this.data.swags
  }

  public postSwags(swags: any): Observable<any> {
    return this.http.put(environment.urlApi, swags);
  }

}