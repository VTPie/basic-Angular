import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-version-child',
  template: `
    <h3>Version {{major}}.{{minor}}</h3>
    <h4>Change log:</h4>
    <ul>
      <li *ngFor="let change of changeLog">{{change}}</li>
    </ul>
  `,
  styleUrls: ['./version-child.component.scss']
})
export class VersionChildComponent implements OnChanges {
  @Input() major = 0;
  @Input() minor = 0;
  changeLog: string[] = [];

  //ngOnchanges nhận đối tượng 'changes' chứa thông tin về các props đã thay đổi.
  ngOnChanges(changes: SimpleChanges) {
    const log: string[] = [];

    //Khai báo 1 biến 'propName' để lặp qua từng props trong changes.
    for (const propName in changes) {

      //Lấy giá trị của props 'propName' của changes gán vào 'changedProp'
      const changedProp = changes[propName];

      //Chuyển đổi giá trị hiện tại của 'changedProp' sang kiểu string và gán cho biến 'to'
      const to = JSON.stringify(changedProp.currentValue);

      if (changedProp.isFirstChange()) {
        log.push(`Initial value of ${propName} set to ${to}`);
      } else {
        const from = JSON.stringify(changedProp.previousValue);
        log.push(`${propName} changed from ${from} to ${to}`);
      }
    }
    //Mảng 'log' được nối thành 1 chuỗi và được đẩy vào mảng 'changeLog'
    this.changeLog.push(log.join(', '));
  }
}
