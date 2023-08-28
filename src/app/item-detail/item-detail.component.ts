import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnChanges {
  @Input() item = '';
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered', changes);
  }
}
