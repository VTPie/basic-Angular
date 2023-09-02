import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucDrtBiComponent } from './struc-drt-bi.component';

describe('StrucDrtBiComponent', () => {
  let component: StrucDrtBiComponent;
  let fixture: ComponentFixture<StrucDrtBiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StrucDrtBiComponent]
    });
    fixture = TestBed.createComponent(StrucDrtBiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
