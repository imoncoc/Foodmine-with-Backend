import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderTarckPageComponent } from './order-tarck-page.component';

describe('OrderTarckPageComponent', () => {
  let component: OrderTarckPageComponent;
  let fixture: ComponentFixture<OrderTarckPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderTarckPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderTarckPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
