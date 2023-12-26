import { Component } from '@angular/core';
import { LinkedinSvgComponent } from '../svgs/linkedin-svg/linkedin-svg.component';
import { GithubSvgComponent } from '../svgs/github-svg/github-svg.component';
import { MaltSvgComponent } from '../svgs/malt-svg/malt-svg.component';
import { TranslateModule } from '@ngx-translate/core';
import { MediaSvgComponent } from '../svgs/media-svg/media-svg.component';
import { NgComponentOutlet } from '@angular/common';
import { Medium } from '../../models/types';

@Component({
  selector: 'app-media',
  standalone: true,
  imports: [
    LinkedinSvgComponent, GithubSvgComponent, MaltSvgComponent, TranslateModule, MediaSvgComponent, NgComponentOutlet
  ],
  templateUrl: './media.component.html'
})
export class MediaComponent {
  readonly media: Medium[] = [
    { link: 'https://linkedin.com/in/florian-hamel42', component: LinkedinSvgComponent },
    { link: 'https://github.com/florianhamel', component: GithubSvgComponent },
    { link: 'https://malt.fr/profile/florianhamel', component: MaltSvgComponent }
  ];
}
