import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SkillsSvgComponent } from '../svgs/skills-svg/skills-svg.component';
import { TranslateModule } from '@ngx-translate/core';
import { Skill } from '../../models/types';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, SkillsSvgComponent, TranslateModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  readonly skills: Skill[] = [
    { name: 'Spring Boot', size: 'lg' },
    { name: 'NestJS', size: 'sm' },
    { name: 'MongoDB', size: 'xs' },
    { name: 'Angular', size: 'xxl' },
    { name: 'TypeScript', size: 'xl' },
    { name: 'React', size: 'sm' },
    { name: 'Git', size: 'xl' },
    { name: 'Docker', size: 'lg' },
    { name: 'Next.js', size: 'sm' },
    { name: 'Java', size: 'lg' },
    { name: 'Node.js', size: 'sm' },
    { name: 'C/C++', size: 'lg' },
    { name: 'Python3', size: 'xs' },
    { name: 'JavaScript', size: 'lg' },
    { name: 'PostgreSQL', size: 'sm' }
  ];
}
