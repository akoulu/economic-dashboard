import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, retry } from 'rxjs';

export interface WorldBankIndicator {
  id: string;
  value: string;
}

export interface WorldBankCountry {
  id: string;
  value: string;
  countryiso3code: string;
}

export interface WorldBankDataPoint {
  indicator: WorldBankIndicator;
  country: WorldBankCountry;
  countryiso3code: string;
  date: string;
  value: number | null;
  unit: string;
  obs_status: string;
  decimal: number;
}

export interface WorldBankResponse {
  page: number;
  pages: number;
  per_page: number;
  total: number;
  sourceid: string | null;
  lastupdated: string;
}

export interface WorldBankApiResponse {
  metadata: WorldBankResponse;
  data: WorldBankDataPoint[];
}

export type WorldBankApiResponseArray = [
  WorldBankResponse,
  WorldBankDataPoint[],
];

export interface EconomicData {
  country: string;
  countryCode: string;
  indicator: string;
  indicatorName: string;
  value: number | null;
  date: string;
  unit: string;
}

@Injectable({
  providedIn: 'root',
})
export class WorldBankApiService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = 'https://api.worldbank.org/v2';

  /**
   * Fetch economic data from World Bank API
   */
  fetchEconomicData(
    countries: string[] = ['RU', 'CN', 'IN', 'US'],
    indicators: string[] = [
      'NY.GDP.MKTP.CD',
      'NY.GDP.MKTP.KD.ZG',
      'NE.EXP.GNFS.CD',
      'NE.IMP.GNFS.CD',
    ],
    startYear: number = 2014,
    endYear: number = 2025
  ): Observable<EconomicData[]> {
    const countriesParam = countries.join(';');
    const indicatorsParam = indicators.join(';');
    const dateRange = `${startYear}:${endYear}`;

    const url = `${this.baseUrl}/country/${countriesParam}/indicator/${indicatorsParam}`;
    const params = {
      format: 'json',
      date: dateRange,
      per_page: '1000',
      source: '2',
    };

    return this.http.get<WorldBankApiResponseArray>(url, { params }).pipe(
      retry(3),
      map(response => this.transformApiResponse(response)),
      catchError(error => {
        console.error('Error fetching World Bank data:', error);
        return of([]);
      })
    );
  }

  /**
   * Fetch GDP data specifically
   */
  fetchGdpData(
    countries: string[] = ['RU', 'CN', 'IN', 'US']
  ): Observable<EconomicData[]> {
    return this.fetchEconomicData(countries, ['NY.GDP.MKTP.CD']);
  }

  /**
   * Fetch trade data (exports and imports)
   */
  fetchTradeData(
    countries: string[] = ['RU', 'CN', 'IN', 'US']
  ): Observable<EconomicData[]> {
    return this.fetchEconomicData(countries, [
      'NE.EXP.GNFS.CD',
      'NE.IMP.GNFS.CD',
    ]);
  }

  /**
   * Transform API response to our data model
   */
  private transformApiResponse(
    response: WorldBankApiResponseArray
  ): EconomicData[] {
    if (!response || response.length < 2 || !response[1]) {
      return [];
    }

    return response[1].map((item: WorldBankDataPoint) => ({
      country: item.country.value,
      countryCode: item.country.id,
      indicator: item.indicator.id,
      indicatorName: item.indicator.value,
      value: item.value,
      date: item.date,
      unit: item.unit,
    }));
  }

  /**
   * Get available countries
   */
  getAvailableCountries(): Observable<WorldBankCountry[]> {
    const url = `${this.baseUrl}/country`;
    const params = { format: 'json', per_page: '1000' };

    return this.http.get<WorldBankApiResponseArray>(url, { params }).pipe(
      map(response => response[1] || []),
      catchError(error => {
        console.error('Error fetching countries:', error);
        return of([]);
      })
    );
  }

  /**
   * Get available indicators
   */
  getAvailableIndicators(): Observable<WorldBankIndicator[]> {
    const url = `${this.baseUrl}/indicator`;
    const params = { format: 'json', per_page: '1000' };

    return this.http.get<WorldBankApiResponseArray>(url, { params }).pipe(
      map(response => response[1] || []),
      catchError(error => {
        console.error('Error fetching indicators:', error);
        return of([]);
      })
    );
  }
}
