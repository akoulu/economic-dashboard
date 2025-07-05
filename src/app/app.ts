import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EconomicData } from './core/services/economic-data';
import { DashboardComponent } from './features/dashboard/dashboard/dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'economic-dashboard';
  private readonly api = inject(EconomicData);

  getData() {
    // TODO: Implement data fetching
  }
}
