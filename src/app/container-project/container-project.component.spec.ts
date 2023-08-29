import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerProjectComponent } from './container-project.component';

describe('ContainerProjectComponent', () => {
  let component: ContainerProjectComponent;
  let fixture: ComponentFixture<ContainerProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContainerProjectComponent]
    });
    fixture = TestBed.createComponent(ContainerProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
