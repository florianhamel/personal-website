import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IntroComponent } from './components/intro/intro.component';
import { HeaderComponent } from './components/header/header.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { SkillsComponent } from './components/skills/skills.component';
import { CommonModule } from '@angular/common';
import { MediaComponent } from './components/media/media.component';
import { MatIconModule } from '@angular/material/icon';
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { FooterComponent } from './components/footer/footer.component';

function TranslateLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateLoaderFactory,
        deps: [HttpClient]
      }
    }),
    BrowserModule,
    CommonModule,
    HttpClientModule,
    IntroComponent,
    HeaderComponent,
    SkillsComponent,
    MediaComponent,
    MatIconModule,
    HobbiesComponent,
    FooterComponent
  ]
})
export class AppModule {
}
