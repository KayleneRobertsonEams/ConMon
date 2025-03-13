import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-app-hci-palesa-mining-hub-main-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app-hci-palesa-mining-hub-main-menu.component.html',
  styleUrl: './app-hci-palesa-mining-hub-main-menu.component.css',
})
export class AppHciPalesaMiningHubMainMenuComponent {
  pageTitle: string = 'HCI Coal : Palesa Mine';
  iframeSrc: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.iframeSrc = this.sanitizeUrl(
      'https://analytics.zoho.com/open-view/2721671000001412035/49dcf72150c6a2b906b72f1f6d6cdd00'
    );
  }

  changeContent(title: string, src: string) {
    this.pageTitle = title;
    this.iframeSrc = this.sanitizeUrl(src);
  }

  sanitizeUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
