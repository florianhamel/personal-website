import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeartSvgComponent } from '../svgs/heart-svg/heart-svg.component';
import { DevSvgComponent } from '../svgs/dev-svg/dev-svg.component';
import { arrowUni } from '../../models/constants';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [TranslateModule, CommonModule, HeartSvgComponent, DevSvgComponent],
  templateUrl: './intro.component.html'
})
export class IntroComponent {
  protected readonly arrowUni: string = arrowUni;
}
