import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetAuthComponent } from './reset-auth.component';

describe('ResetAuthComponent', () => {
  let component: ResetAuthComponent;
  let fixture: ComponentFixture<ResetAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResetAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
