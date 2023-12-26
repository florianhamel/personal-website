import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Language, NavItem } from '../../models/types';
import { TranslationSvgComponent } from '../svgs/translation-svg/translation-svg.component';
import { RouterLink } from '@angular/router';

type Lang = 'en' | 'fr';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, TranslationSvgComponent, RouterLink],
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  currentLang!: Lang;

  readonly items: NavItem[] = [
    { titleKey: 'header.intro', route: '' }
  ];

  readonly languages: Map<string, Language> = new Map<string, Language>([
    ['en', { flag: '🇬🇧', name: 'English' }],
    ['fr', { flag: '🇫🇷', name: 'Français' }]
  ]);

  constructor(private readonly translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.currentLang = this.translateService.currentLang as Lang;
  }

  handleClick(): void {
    this.currentLang = (this.currentLang === 'en') ? 'fr' : 'en';
    this.translateService.use(this.currentLang);
  }
}
