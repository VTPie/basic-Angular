import { Component } from '@angular/core';
import { HEROES } from '../hero-child/hero';

@Component({
  selector: 'app-hero-parent',
  template: `
    <!-- {{x}} là cú pháp interpolation, cho phép hiển thị động các giá trị từ dữ liệu của component. -->
    <h2>{{master}} controls {{heroes.length}} heroes</h2>
    <!-- *ngFor dùng để lặp qua từng hero trong mảng heroes của component cha. Đối với từng hero, app-hero-child sẽ được lặp lại.  -->
    <app-hero-child
      *ngFor="let hero of heroes"
      [hero]="hero"
      [master]="master">
    </app-hero-child>
  `,
  styleUrls: ['./hero-parent.component.scss']
})
export class HeroParentComponent {
  heroes = HEROES;
  master = 'Master';
}
