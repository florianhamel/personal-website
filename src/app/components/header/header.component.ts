import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CdkMenu, CdkMenuItem, CdkMenuTrigger } from '@angular/cdk/menu';
import { Language, NavItem } from '../../models/types';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, MatButtonModule, MatIconModule, CdkMenuTrigger, CdkMenu, CdkMenuItem],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  readonly items: NavItem[] = [
    { titleKey: 'header.intro', anchor: 'intro' }
    // { titleKey: 'header.about', anchor: 'about' }
  ];
  languages: Language[] = [
    { flag: '🇬🇧', name: 'English', value: 'en' },
    { flag: '🇫🇷', name: 'Français', value: 'fr' }
  ];

  constructor(private readonly translateService: TranslateService) {
  }

  handleClick(name: string): void {
    this.translateService.use(name);
  }
}
