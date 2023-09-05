import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewProfileEditorComponent } from './new-profile-editor.component';

describe('NewProfileEditorComponent', () => {
  let component: NewProfileEditorComponent;
  let fixture: ComponentFixture<NewProfileEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewProfileEditorComponent]
    });
    fixture = TestBed.createComponent(NewProfileEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
