import { Component } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { CountdownTimerComponent } from '../countdown-timer/countdown-timer.component';

//Trong trường hợp sử dụng local variable, nếu các biến hoặc phương thức ở component con được thiết lập là
//private thì component cha không thể truy cập được, và cách kết nối này được thực hiện hoàn toàn ở
//component cha, bản thân component cha không có quyền truy cập vào thành phần con.
@Component({
  selector: 'app-countdown-parent-v2',
  template: `
    <h3>Countdown to Liftoff (via ViewChild)</h3>
    <button type="button" (click)="start()">Start</button>
    <button type="button" (click)="stop()">Stop</button>
    <div class="seconds">{{ seconds() }}</div>
    <app-countdown-timer></app-countdown-timer>
  `,
  styleUrls: ['./countdown-parent-v2.component.scss']
})
export class CountdownParentV2Component implements AfterViewInit {
  // @ViewChild: là 1 decorator được dùng khi muốn truy cập vào component con từ component cha.
  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;

  seconds() { return 0; }

  // Xác định giá trị cho this.seconds được lấy từ this.timerComponent.seconds, 
  // nhưng delay 1 chút để tránh one-time devMode
  // tránh unidirectional-data-flow-violation error 
  ngAfterViewInit() {
    setTimeout(() => this.seconds = () => this.timerComponent.seconds, 0);
  }

  start() { this.timerComponent.start(); }
  stop() { this.timerComponent.stop(); }
}
