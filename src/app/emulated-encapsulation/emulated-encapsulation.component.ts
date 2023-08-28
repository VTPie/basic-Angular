import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-emulated-encapsulation',
  templateUrl: './emulated-encapsulation.component.html',
  styleUrls: ['./emulated-encapsulation.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
  // Emulated (default): tương tự None, nhưng kèm theo "scoped" 
  // làm cho styles chỉ áp dụng với các component tương ứng và ghi đè styles của None.
})
export class EmulatedEncapsulationComponent {

}
