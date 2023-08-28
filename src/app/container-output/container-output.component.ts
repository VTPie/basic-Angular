import { Component } from '@angular/core';

@Component({
  selector: 'app-container-output',
  templateUrl: './container-output.component.html',
  styleUrls: ['./container-output.component.scss']
})
export class ContainerOutputComponent {
  items = ['item1', 'item2', 'item3', 'item4'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
