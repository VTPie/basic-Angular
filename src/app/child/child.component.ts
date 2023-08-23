import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() userName = '';

  //ngOnChanges: được gọi lần đầu khi Component được tạo ra và được gọi lại mỗi lần có thay đổi trong Input()
  //ngOnChanges sẽ không được gọi nếu Component không có Input.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered', changes);
  }

  //ngOnInit(): chỉ được gọi 1l duy nhất trong toàn bộ lifecycle component, ngay sau khi ngOnchanges được gọi
  //lần đầu tiên. ngOnInit vẫn sẽ được gọi ngay cả khi ngOnChanges không được gọi.
  ngOnInit() {
    console.log('ngOnInit from the child component');
  }

  //ngDoCheck(): 
}
