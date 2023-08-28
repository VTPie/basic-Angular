import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
  selector: 'app-hero-child',
  template: `
    <!-- {{x}} là cú pháp interpolation, cho phép hiển thị động các giá trị từ dữ liệu của component. -->
    <h3>{{hero.name}} says:</h3>
    <p>I, {{hero.name}}, am at your service, {{masterName}}.</p>
  `,
  styleUrls: ['./hero-child.component.scss']
})
export class HeroChildComponent {
  //@Input() cho phép truyền dữ liệu từ component cha xuống component con.
  @Input() hero!: Hero; //Input này trả dữ liệu vào 1 biến "hero" (! nghĩa là khác rỗng) có kiểu dữ liệu là Hero.
  @Input('master') masterName = ''; //Nhận giá trị và gán vào biến "mastername", alias 'master' cho phép biến masterName có thể nhận giá trị từ biến 'master' trong component cha (khác tên).
}
