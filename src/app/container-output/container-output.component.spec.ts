import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerOutputComponent } from './container-output.component';

describe('ContainerOutputComponent', () => {
  let component: ContainerOutputComponent;
  let fixture: ComponentFixture<ContainerOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerOutputComponent]
    });
    fixture = TestBed.createComponent(ContainerOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
