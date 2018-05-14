import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveDetailComponent } from './active-detail.component';

describe('ActiveDetailComponent', () => {
  let component: ActiveDetailComponent;
  let fixture: ComponentFixture<ActiveDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
