import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  template: '<p>{{message}}</p>',
  styleUrls: ['./countdown-timer.component.scss']
})
export class CountdownTimerComponent implements OnDestroy {
  message = '';
  seconds = 11;

  ngOnDestroy() { this.clearTimer?.(); }

  start() { this.countDown(); }
  stop() {
    //?. - the optional chaining operator
    //Toán tử này được sử dụng để truy cập các thuộc tính và phương thức (có thể null hoặc undefine) nếu nó not undefine.
    this.clearTimer?.();
    this.message = `Holding at T-${this.seconds} seconds`;
  }

  //clearTimer tham chiếu đến undefined hoặc VoidFunction - hàm không có đối số và không trả về giá trị nào.
  private clearTimer: VoidFunction | undefined;

  private countDown() {
    this.clearTimer?.(); //Xóa setInterval đã chạy trước đó, ngăn không cho nhiều bộ hẹn giờ chạy đồng thời.
    //Thực thi interval mỗi 1s.
    const interval = setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.message = 'Blast off!';
      } else {
        if (this.seconds < 0) { this.seconds = 10; } // reset
        this.message = `T-${this.seconds} seconds and counting`;
      }
    }, 1000);
    this.clearTimer = () => clearInterval(interval);
  }
}
