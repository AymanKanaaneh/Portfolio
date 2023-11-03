import { Component } from '@angular/core';
import { Skill, skillsData } from '../../assets/skillsData';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent {
  skills: Skill[] = skillsData;
}
