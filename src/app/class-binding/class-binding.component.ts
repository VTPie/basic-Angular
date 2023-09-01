import { Component } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  templateUrl: './class-binding.component.html',
  styleUrls: ['./class-binding.component.scss']
})
export class ClassBindingComponent {
  stateSingle = false
  handleClickButton() {
    this.stateSingle = !this.stateSingle
  }

  stateMul1 = "mul1-class-1 mul1-class-2"
  stateMul2 = {
    mul2a: true,
    mul2b: false,
    mul2c: true
  }
  stateMul3 = ['mul3a', 'mul3b']
}
