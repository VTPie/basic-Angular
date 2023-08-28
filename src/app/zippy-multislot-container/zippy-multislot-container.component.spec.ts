import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZippyMultislotContainerComponent } from './zippy-multislot-container.component';

describe('ZippyMultislotContainerComponent', () => {
  let component: ZippyMultislotContainerComponent;
  let fixture: ComponentFixture<ZippyMultislotContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZippyMultislotContainerComponent]
    });
    fixture = TestBed.createComponent(ZippyMultislotContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
