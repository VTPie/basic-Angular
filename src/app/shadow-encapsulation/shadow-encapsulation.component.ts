import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-shadow-encapsulation',
  templateUrl: './shadow-encapsulation.component.html',
  styleUrls: ['./shadow-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ShadowEncapsulationComponent {

}
