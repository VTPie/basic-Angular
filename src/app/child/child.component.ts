import { AfterContentInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck {
  //@Input() : cho phép truyền dữ liệu từ component cha xuống component con.
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

  //ngDoCheck(): được gọi mỗi lần Component có thay đổi.
  //DoCheck có thể phát hiện được cả những thay đổi mà OnChanges không phát hiện được. 
  //Angular theo dõi tham chiếu đối tượng, nếu thay đổi đối tượng mà không thay đổi tham chiếu thì Angular sẽ
  //không phát hiện thay đổi, nhưng DoCheck thì có.
  ngDoCheck() {
    console.log('ngDoCheck triggered');
  }
}
