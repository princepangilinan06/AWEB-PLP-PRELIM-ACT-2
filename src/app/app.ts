import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Prince Lenard G. Pangilinan';
  email = 'princepangilinan06@gmail.com';
  menuOpen = false;
  currentYear = new Date().getFullYear();

  skills = [
    { number: '01', name: 'HTML & CSS', description: 'Structuring and styling responsive web pages.' },
    { number: '02', name: 'JavaScript', description: 'Adding logic and interactivity to websites.' },
    { number: '03', name: 'TypeScript', description: 'Writing organized, typed application code.' },
    { number: '04', name: 'Angular', description: 'Building component-based web applications.' },
    { number: '05', name: 'Java & OOP', description: 'Practicing object-oriented programming concepts.' },
    { number: '06', name: 'Networking', description: 'Learning how devices and systems communicate.' }
  ];

  projects = [
    { title: 'Tagpuan', type: 'VENUE DISCOVERY PLATFORM', description: 'A platform concept that helps people discover, compare, and evaluate hotels and event venues based on their needs.', image: '/images/tagpuan.png', tags: ['Web Development', 'UI Design', 'Research'] },
    { title: 'PlanIT', type: 'JAVA · OBJECT-ORIENTED PROGRAMMING', description: 'A lesson-planning system concept designed to help organize academic plans and teaching activities.', image: '/images/planit.png', tags: ['Java', 'OOP', 'Team Project'] },
    { title: 'Trip Cost Calculator', type: 'WEB APPLICATION', description: 'A practical calculator concept for estimating transport trip costs with editable distance, fuel, toll, and expense inputs.', image: '/images/calculator.png', tags: ['HTML', 'CSS', 'JavaScript'] }
  ];
}
