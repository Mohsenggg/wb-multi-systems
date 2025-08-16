import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface HomeSection {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonText?: string;
}


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  
})
export class HomeComponent {

sections: HomeSection[] = [
    {
      title: 'Our Story',
      description: 'Founded in 2005, we have been building dreams into reality with our expert craftsmanship and dedication to quality construction.',
      imageUrl: '/images/man.JPG',
      imageAlt: 'Construction team working on a project'
    },
    {
      title: 'Our Services',
      description: 'From residential to commercial projects, we offer comprehensive construction services tailored to your specific needs.',
      imageUrl: '/images/service.JPG',
      imageAlt: 'Completed commercial building',
      buttonText: 'View Services'
    },
    {
      title: 'Our Projects',
      description: 'Explore our portfolio of successful projects that showcase our commitment to excellence in construction.',
      imageUrl: '/images/our-projects.jpg',
      imageAlt: 'Modern residential home',
      buttonText: 'See Projects'
    },
    {
      title: 'Our Team',
      description: 'Meet our team of skilled professionals who bring expertise and passion to every project we undertake.',
      imageUrl: '/images/our-team.jpg',
      imageAlt: 'Construction team portrait'
    }
  ];

}
