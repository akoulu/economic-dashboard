import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GdpChart } from './gdp-chart';

describe('GdpChart', () => {
  let component: GdpChart;
  let fixture: ComponentFixture<GdpChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GdpChart],
    }).compileComponents();

    fixture = TestBed.createComponent(GdpChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
