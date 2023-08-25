import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  //@Input() cho phép truyền dữ liệu từ component cha xuống component con.
  @Input() userName = '';

  //ngOnChanges được gọi lần đầu khi Component được tạo ra và được gọi lại mỗi lần có thay đổi trong Input()
  //ngOnChanges sẽ không được gọi nếu Component không có Input.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges triggered', changes);
  }

  //ngOnInit chỉ được gọi 1 lần duy nhất trong toàn bộ lifecycle component, ngay sau khi ngOnchanges được gọi lần đầu tiên
  //ngOnInit vẫn sẽ được gọi ngay cả khi ngOnChanges không được gọi.
  ngOnInit() {
    console.log('ngOnInit from the child component');
  }

  //ngDoCheck được gọi mỗi lần Component có thay đổi.
  //ngDoCheck có thể phát hiện được cả những thay đổi mà OnChanges không phát hiện được. 
  //Angular theo dõi tham chiếu đối tượng, nếu thay đổi đối tượng mà không thay đổi tham chiếu thì Angular sẽ không phát hiện thay đổi, nhưng DoCheck thì có.
  ngDoCheck() {
    console.log('ngDoCheck triggered');
  }

  //ngAfterContentInit chỉ được gọi 1 lần duy nhất trong toàn bộ lifecycle component, ngay sau khi ngDoCheck được gọi lần đầu tiên
  ngAfterContentInit() {
    console.log('ngAfterContentInit triggered');
  }

  //ngAfterContentChecked chạy lần đầu sau ngAfterContentInit và sau mỗi ngDoCheck tiếp theo.
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked triggered');
  }

  //ngAfterViewInit chỉ được gọi 1 lần duy nhất trong toàn bộ lifecycle component, ngay sau khi ngAfterContentChecked được gọi lần đầu tiên
  ngAfterViewInit() {
    console.log('ngAfterViewInit triggered')
  }

  //ngAfterViewChecked chạy lần đầu sau ngAfterViewInit và sau mỗi ngAfterContentChecked tiếp theo.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked triggered')
  }

  //ngOnDestroy chỉ được gọi 1 lần duy nhất trong toàn bộ lifecycle component, ngay trước khi Angular phá hủy nó.
  ngOnDestroy(): void {
    console.log('Child component is destroyed!');
  }
}
