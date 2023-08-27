import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none-encapsulation',
  templateUrl: './none-encapsulation.component.html',
  styleUrls: ['./none-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NoneEncapsulationComponent {

}
