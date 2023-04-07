import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ISwags } from './model/swags.model';
import { SwagService } from './service/sticker.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.scss']
})

export class StickersComponent implements OnInit {

  swag: ISwags = {};
  swagsList: Array<ISwags> = [];

  constructor(private swagService: SwagService) {
  }

  ngOnInit(): void {

console.log(this.getAWSSwags());

  }

  // putSticker() {
  //   this.swagService.putSticker(this.swag)
  //     .subscribe(() => {
  //       this.getAWSSwags();
  //     },
  //       () => {
  //       });
  // }

  getAWSSwags() {

    this.swagsList = this.swagService.data.swags;
    return this.swagService.data.swags;
 
  }

}