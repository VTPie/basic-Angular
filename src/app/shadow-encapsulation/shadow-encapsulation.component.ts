import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-encapsulation',
  templateUrl: './shadow-encapsulation.component.html',
  styleUrls: ['./shadow-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
  // Shadow DOM: Angular sẽ thêm styles cho component này vào Shadow DOM, 
  // vì vậy chúng không hiển thị bên ngoài Shadow DOM và ghi đè styles của None
})
export class ShadowEncapsulationComponent {

}
