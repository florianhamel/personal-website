import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';
import { PageNotFoundSvgComponent } from '../svgs/page-not-found-svg/page-not-found-svg.component';
import { DevSvgComponent } from '../svgs/dev-svg/dev-svg.component';
import { SkillsSvgComponent } from '../svgs/skills-svg/skills-svg.component';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    TranslateModule,
    RouterLink,
    PageNotFoundSvgComponent,
    DevSvgComponent,
    SkillsSvgComponent
  ],
  templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent {

}
