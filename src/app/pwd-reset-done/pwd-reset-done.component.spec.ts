import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PwdResetDoneComponent } from './pwd-reset-done.component';

describe('PwdResetDoneComponent', () => {
  let component: PwdResetDoneComponent;
  let fixture: ComponentFixture<PwdResetDoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PwdResetDoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PwdResetDoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
