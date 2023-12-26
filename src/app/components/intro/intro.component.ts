import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { HeartSvgComponent } from '../svgs/heart-svg/heart-svg.component';
import { DevSvgComponent } from '../svgs/dev-svg/dev-svg.component';
import { arrowUni } from '../../models/constants';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [TranslateModule, CommonModule, HeartSvgComponent, DevSvgComponent, MatIconModule],
  templateUrl: './intro.component.html',
  styleUrl: './intro.component.css'
})
export class IntroComponent {
  protected readonly arrowUnicode: string = arrowUni;
}
