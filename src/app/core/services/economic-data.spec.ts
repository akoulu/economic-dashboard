import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { EconomicData } from './economic-data';

describe('EconomicData', () => {
  let service: EconomicData;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(EconomicData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
