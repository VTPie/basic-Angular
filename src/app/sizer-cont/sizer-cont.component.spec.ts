import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SizerContComponent } from './sizer-cont.component';

describe('SizerContComponent', () => {
  let component: SizerContComponent;
  let fixture: ComponentFixture<SizerContComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SizerContComponent]
    });
    fixture = TestBed.createComponent(SizerContComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
