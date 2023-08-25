import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  userName = 'Maria';

  updateUser() {
    this.userName = 'Chris';
  }

  //ngOnInit(): chỉ được gọi 1l duy nhất trong toàn bộ lifecycle component, ngay sau khi ngOnchanges được gọi
  //lần đầu tiên. ngOnInit vẫn sẽ được gọi ngay cả khi ngOnChanges không được gọi.
  ngOnInit() {
    console.log('ngOnInit from the parent component');
  }

  isChildDestroyed = false;
  destroy() {
    this.isChildDestroyed = true;
  }
}
