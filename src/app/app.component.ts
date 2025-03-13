import { Component } from '@angular/core';
import { AppHciPalesaMiningHubMainMenuComponent } from './app-hci-palesa-mining-hub-main-menu/app-hci-palesa-mining-hub-main-menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, AppHciPalesaMiningHubMainMenuComponent],
  template:
    '<app-app-hci-palesa-mining-hub-main-menu></app-app-hci-palesa-mining-hub-main-menu>',
})
export class AppComponent {
  title = 'ConmonApp';
}
