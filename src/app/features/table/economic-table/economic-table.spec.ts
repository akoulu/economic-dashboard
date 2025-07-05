import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EconomicTable } from './economic-table';

describe('EconomicTable', () => {
  let component: EconomicTable;
  let fixture: ComponentFixture<EconomicTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EconomicTable],
    }).compileComponents();

    fixture = TestBed.createComponent(EconomicTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
