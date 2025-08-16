import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {



isMenuOpen = false;
  services = [
    { id: 'construction', name: 'General Construction' },
    { id: 'renovation', name: 'Building Renovation' },
    { id: 'design-build', name: 'Design & Build' }
    // Add your actual services here
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleDropdown(event: Event) {
    if (window.innerWidth <= 992) {
      event.preventDefault();
      const dropdown = (event.currentTarget as HTMLElement).closest('li');
      dropdown?.querySelector('.dropdown-menu')?.classList.toggle('show');
    }
  }

}
