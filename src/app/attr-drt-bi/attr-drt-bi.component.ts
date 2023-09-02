import { Component } from '@angular/core';

@Component({
  selector: 'app-attr-drt-bi',
  templateUrl: './attr-drt-bi.component.html',
  styleUrls: ['./attr-drt-bi.component.scss']
})
export class AttrDrtBiComponent {
  //Using NgClass with an expression
  isSpecial = false;
  updateState() {
    this.isSpecial = !this.isSpecial
  }

  //Using NgClass with a method
  isSpecial2 = false;
  currentClasses: Record<string, boolean> = {};
  setCurrentClasses() {
    this.isSpecial2 = !this.isSpecial2
    this.currentClasses = {
      special: this.isSpecial2
    };
  }

  //Setting inline styles with NgStyle
  isSpecial3 = false;
  currentStyles: Record<string, string> = {};
  setCurrentStyles() {
    this.isSpecial3 = !this.isSpecial3
    this.currentStyles = {
      'background-color': this.isSpecial3 ? 'silver' : 'white'
    };
  }

  //Displaying and updating properties with ngModel
  username: string = '';
}
