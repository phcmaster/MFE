import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ISticker } from './model/sticker.model';
import { StickerService } from './service/sticker.service';

@Component({
  selector: 'app-stickers',
  templateUrl: './stickers.component.html',
  styleUrls: ['./stickers.component.scss']
})
export class StickersComponent implements OnInit {

  sticker: ISticker = {};
  username!: string;
  stickerList: Array<ISticker> = [];
  stickerForm!: FormGroup;

  constructor(private stickerService: StickerService, private router: Router) {
  }

  ngOnInit(): void {
    this.getUserName();
    this.buildForm();
    this.getStickers();
  }

  private getUserName() {
    if (sessionStorage.getItem('userData')) {
      let user = JSON.parse(sessionStorage.getItem('userData') || '{}');
      if (user.attributes.email) {
        this.username = user.attributes.email;
      }
    }
  }

  private buildForm(sticker?: ISticker) {
    this.stickerForm = new FormGroup({
      id: new FormControl({ value: (sticker ? sticker.id : ''), disabled: (sticker ? true : false) }, [Validators.required]),
      name: new FormControl({ value: (sticker ? sticker.name : ''), disabled: false }, [Validators.required]),
      country: new FormControl({ value: (sticker ? sticker.country : ''), disabled: false }, [Validators.required]),
      category: new FormControl({ value: (sticker ? sticker.category : ''), disabled: false }, [Validators.required])
    });
  }

  editSticker(sticker: ISticker) {
    this.buildForm(sticker);
  }

  putSticker() {
    this.getStickerFormData();
    this.stickerService.putSticker(this.sticker)
      .subscribe(() => {
        this.getStickers();
        this.stickerForm.reset();
      },
        () => {
        });
  }

  deleteSticker(id: string) {
    this.stickerService.deleteStickerById(id)
      .subscribe(() => {
        this.getStickers();
      },
        () => {
        });
  }

  getStickers() {
    this.stickerService.getStickers()
      .subscribe((stickers: any) => {
        this.stickerList = stickers.Items;
      },
        () => {
        });
  }


  private getStickerFormData() {
    this.sticker.id = this.stickerForm.get('id')?.value;
    this.sticker.name = this.stickerForm.get('name')?.value;
    this.sticker.country = this.stickerForm.get('country')?.value;
    this.sticker.category = this.stickerForm.get('category')?.value;
  }
}
