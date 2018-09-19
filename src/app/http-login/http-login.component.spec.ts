import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpLoginComponent } from './http-login.component';

describe('HttpLoginComponent', () => {
  let component: HttpLoginComponent;
  let fixture: ComponentFixture<HttpLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
