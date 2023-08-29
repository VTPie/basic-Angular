import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-projected',
  template: `
    <ng-container *ngIf="showContent; else noContent">
      <ng-content></ng-content>
    </ng-container>
    <ng-template #noContent>
      <p>No content to display.</p>
    </ng-template>
  `,
  styleUrls: ['./item-projected.component.scss']
})
export class ItemProjectedComponent {
  @Input() showContent: boolean = false;
}
