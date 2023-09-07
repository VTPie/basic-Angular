import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.scss']
})
// export class LifecycleHookComponent implements AfterViewInit {
//   @ViewChild('btnState') btnState!: ElementRef;

//   ngAfterViewInit() {
//     this.btnState.nativeElement.innerHTML = "goodbye"
//   }
// }
export class LifecycleHookComponent {
  @ViewChild('btnState') btnState!: ElementRef;
}
