import { Component } from '@angular/core';
import { HobbiesComponent } from '../hobbies/hobbies.component';
import { IntroComponent } from '../intro/intro.component';
import { MediaComponent } from '../media/media.component';
import { SkillsComponent } from '../skills/skills.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HobbiesComponent,
    IntroComponent,
    MediaComponent,
    SkillsComponent
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
}
