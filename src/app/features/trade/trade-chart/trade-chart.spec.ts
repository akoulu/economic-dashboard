import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradeChart } from './trade-chart';

describe('TradeChart', () => {
  let component: TradeChart;
  let fixture: ComponentFixture<TradeChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TradeChart],
    }).compileComponents();

    fixture = TestBed.createComponent(TradeChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
