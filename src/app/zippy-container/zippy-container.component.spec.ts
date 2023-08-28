import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyContainerComponent } from './zippy-container.component';

describe('ZippyContainerComponent', () => {
  let component: ZippyContainerComponent;
  let fixture: ComponentFixture<ZippyContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZippyContainerComponent]
    });
    fixture = TestBed.createComponent(ZippyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
