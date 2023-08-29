import { Component } from '@angular/core';

@Component({
  selector: 'app-container-project',
  template: `
    <app-item-projected [showContent]="true">
      <p>Content to display when showContent is true.</p>
    </app-item-projected>

    <app-item-projected [showContent]="false">
      <p>This content won't be displayed.</p>
    </app-item-projected>
  `,
  styleUrls: ['./container-project.component.scss']
})
export class ContainerProjectComponent {
}
