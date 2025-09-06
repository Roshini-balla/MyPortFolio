import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true, // <-- this line is important
  imports: [CommonModule], // <-- add this line
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class SkillsComponent {
  skills = [
    { icon: '🌐', name: 'HTML' },
    { icon: '🎨', name: 'CSS' },
    { icon: '🅰️', name: 'Angular' },
    { icon: '☕', name: 'Java' },
    { icon: '🌱', name: 'Spring Boot' },
    { icon: '🛢️', name: 'MySQL' },
    { icon: '🧠', name: 'Problem Solving' },
    { icon: '🗃️', name: 'Git & GitHub' }
  ];
}
