import { Component } from '@angular/core';
import { SkillsSvgComponent } from '../svgs/skills-svg/skills-svg.component';
import { Hobby } from '../../models/types';
import { TranslateModule } from '@ngx-translate/core';
import { HobbiesSvgComponent } from '../svgs/hobbies-svg/hobbies-svg.component';
import { HeartSvgComponent } from '../svgs/heart-svg/heart-svg.component';

@Component({
  selector: 'app-hobbies',
  standalone: true,
  imports: [SkillsSvgComponent, TranslateModule, HobbiesSvgComponent, HeartSvgComponent],
  templateUrl: './hobbies.component.html'
})
export class HobbiesComponent {
  readonly hobbies: Hobby[] = [
    { key: 'hobbies.philosophy', size: 'xl' },
    { key: 'hobbies.videoGames', size: 'xs' },
    { key: 'hobbies.running', size: 'sm' },
    { key: 'hobbies.nonDuality', size: 'lg' },
    { key: 'hobbies.tea', size: 'xs' },
    { key: 'hobbies.typing', size: 'md' },
    { key: 'hobbies.swimming', size: 'lg' },
    { key: 'hobbies.physics', size: 'xs' },
    { key: 'hobbies.meditation', size: 'md' },
    { key: 'hobbies.communication', size: 'xl' },
    { key: 'hobbies.animation', size: 'md' },
    { key: 'hobbies.psychology', size: 'lg' }
  ];
}
