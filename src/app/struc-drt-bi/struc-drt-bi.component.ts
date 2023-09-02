import { Component } from '@angular/core';

@Component({
  selector: 'app-struc-drt-bi',
  templateUrl: './struc-drt-bi.component.html',
  styleUrls: ['./struc-drt-bi.component.scss']
})
export class StrucDrtBiComponent {
  userName = "Phong"
  isActive = true
  updateState() {
    this.isActive = !this.isActive
  }

  items = ['item1', 'item2', 'item3', 'item4'];

  caseState = true;
  updateState2() {
    this.caseState = !this.caseState
  }
}
