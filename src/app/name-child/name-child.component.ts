import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-name-child',
  templateUrl: './name-child.component.html',
  styleUrls: ['./name-child.component.scss']
})
export class NameChildComponent {
  @Input()

  // Getter: Trả về giá trị của 1 property.
  // Getter này nhận giá trị của property name và trả về _name khác.
  get name(): string { return this._name; }

  // Setter: Cập nhật giá trị của 1 property.
  // Setter này nhận 1 tham số đầu vào là 'name' với kiểu dữ liệu string, 
  // Nếu giá trị tham số này là đúng thì tham số này sẽ bị cắt khoảng trắng bằng trim(), ngược lại sẽ bị gán là <no name set>
  // Cuối cùng, gán giá trị này cho this._name
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }

  //Biến này được sử dụng để getter truy cập và cho setter sửa đổi.
  private _name = '';
}
