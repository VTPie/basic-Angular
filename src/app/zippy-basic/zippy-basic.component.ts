import { Component } from '@angular/core';

@Component({
  selector: 'app-zippy-basic',
  template: `
    <h2>Single-slot content projection</h2>
    <!-- Nơi nội dung sẽ được project -->
    <ng-content></ng-content>
  `,
  styleUrls: ['./zippy-basic.component.scss']
})
export class ZippyBasicComponent {

}
