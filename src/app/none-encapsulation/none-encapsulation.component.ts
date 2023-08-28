import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none-encapsulation',
  templateUrl: './none-encapsulation.component.html',
  styleUrls: ['./none-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.None,
  // None: Angular sẽ thêm styles cho component này dưới dạng global styles vào <head>,
  // làm cho styles này xuất hiện trong toàn bộ ứng dụng.
})
export class NoneEncapsulationComponent {

}
