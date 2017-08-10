import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresenterProfileComponent } from './presenter-profile.component';

describe('PresenterProfileComponent', () => {
  let component: PresenterProfileComponent;
  let fixture: ComponentFixture<PresenterProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresenterProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresenterProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
