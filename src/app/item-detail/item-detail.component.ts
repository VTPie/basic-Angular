import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnChanges {
  //Cấu hình Input là bắt buộc, nếu component cha không truyền Input sẽ xảy ra lỗi.
  @Input({ required: true }) item!: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered', changes);
  }
}
