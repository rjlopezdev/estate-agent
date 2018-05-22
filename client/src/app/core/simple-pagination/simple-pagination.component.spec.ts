import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplePaginationComponent } from './simple-pagination.component';

describe('SimplePaginationComponent', () => {
  let component: SimplePaginationComponent;
  let fixture: ComponentFixture<SimplePaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimplePaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimplePaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
