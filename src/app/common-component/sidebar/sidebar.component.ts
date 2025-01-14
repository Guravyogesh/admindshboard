import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  isClosed = false;

  menuItems = [
    { icon: 'bi bi-house', label: 'Home' },
    { icon: 'bi bi-wrench', label: 'Tools' },
    { icon: 'bi bi-check-circle', label: 'Tasks' },
    { icon: 'bi bi-exclamation-triangle', label: 'Alerts' },
    { icon: 'bi bi-alarm', label: 'Reminders' },
    { icon: 'bi bi-file-text', label: 'Documents' },
    { icon: 'bi bi-clock', label: 'Clock' },
    { icon: 'bi bi-gear', label: 'Settings' },
    { icon: 'bi bi-box-arrow-left', label: 'Logout' }
  ];

  toggleSidebar() {
    this.isClosed = !this.isClosed;
  
  }
}
