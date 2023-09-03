import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucDrtComponent } from './struc-drt.component';

describe('StrucDrtComponent', () => {
  let component: StrucDrtComponent;
  let fixture: ComponentFixture<StrucDrtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrucDrtComponent]
    });
    fixture = TestBed.createComponent(StrucDrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
