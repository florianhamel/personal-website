import { Component, effect, OnInit, Signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { visibleHiddenAnimation } from './models/animations';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    visibleHiddenAnimation
  ]
})
export class AppComponent implements OnInit {
  isLoading: Signal<boolean> = this.loadingService.isLoading;

  constructor(
    private readonly translateService: TranslateService,
    private readonly loadingService: LoadingService
  ) {
  }

  ngOnInit(): void {
    const acceptLang: 'en' | 'fr' = navigator.language === 'fr-FR' ? 'fr' : 'en';
    this.translateService.use(acceptLang);
    this.loadingService.isLoading = true;
    this.translateService.get(acceptLang).subscribe({
      complete: () => this.loadingService.isLoading = false
    });
    this.translateService.setDefaultLang('en');
  }
}
