import { Component } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.scss']
})
export class StyleBindingComponent {
  stateSingle = 'red'
  handleClickButton() {
    if (this.stateSingle === 'red') {
      this.stateSingle = 'blue'
    }
    else {
      this.stateSingle = 'red'
    }
  }
  styleString = 'color: red; font-weight: bold'
  styleObject = {
    color: 'blue',
    textDecoration: 'underline'
  }
}
