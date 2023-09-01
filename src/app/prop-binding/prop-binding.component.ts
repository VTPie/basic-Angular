import { Component } from '@angular/core';

@Component({
  selector: 'app-prop-binding',
  templateUrl: './prop-binding.component.html',
  styleUrls: ['./prop-binding.component.scss']
})
export class PropBindingComponent {
  itemImageUrl: string = 'https://www.w3schools.com/html/img_chania.jpg';
  isUnchanged = false;
  classes = 'special';

  handleClickButton() {
    this.isUnchanged = !this.isUnchanged
  }
}
