import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
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
  durationInSeconds = 5;

  constructor(private swagService: SwagService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    console.log(this.getAWSSwags());
    this.getAWSSwags();

  }

  postSwags(swag: ISwags) {
    this.swagService.postSwags(this.swag)
      .subscribe(() => {
        this.getAWSSwags();
        console.log(swag);
      });
      this.openSnackBar("Order sended! " + swag.name, "Done");
  }

  getAWSSwags() {
    this.swagsList = this.swagService.data.swags;
    return this.swagService.data.swags;
 
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: this.durationInSeconds * 600,
    });

  }
  

}