import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  WorldBankApiService,
  EconomicData,
} from '../../../core/services/world-bank-api.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class DashboardComponent implements OnInit {
  private readonly worldBankService = inject(WorldBankApiService);

  economicData: EconomicData[] = [];
  loading = false;
  error: string | null = null;

  ngOnInit() {
    this.loadEconomicData();
  }

  loadEconomicData() {
    this.loading = true;
    this.error = null;

    this.worldBankService.fetchGdpData().subscribe({
      next: data => {
        this.economicData = data;
        this.loading = false;
        console.log('GDP Data loaded:', data);
      },
      error: err => {
        this.error = 'Failed to load economic data';
        this.loading = false;
        console.error('Error loading data:', err);
      },
    });
  }

  getCountries(): string[] {
    return [...new Set(this.economicData.map(item => item.country))];
  }

  getDataForCountry(country: string): EconomicData[] {
    return this.economicData.filter(item => item.country === country);
  }
}
