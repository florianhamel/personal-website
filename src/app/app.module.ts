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
import { HobbiesComponent } from './components/hobbies/hobbies.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { LoadingSvgComponent } from './components/svgs/loading-svg/loading-svg.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    IntroComponent,
    HeaderComponent,
    SkillsComponent,
    MediaComponent,
    HobbiesComponent,
    FooterComponent,
    RouterOutlet,
    LoadingSvgComponent
  ]
})
export class AppModule {
}
