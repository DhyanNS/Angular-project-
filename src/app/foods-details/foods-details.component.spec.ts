import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodsDetailsComponent } from './foods-details.component';

describe('FoodsDetailsComponent', () => {
  let component: FoodsDetailsComponent;
  let fixture: ComponentFixture<FoodsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoodsDetailsComponent]
    });
    fixture = TestBed.createComponent(FoodsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
