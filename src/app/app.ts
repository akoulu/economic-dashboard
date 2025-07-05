import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatRadioButton } from '@angular/material/radio';
import { EconomicData } from './core/services/economic-data';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatRadioButton, MatGridList, MatGridTile],
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
