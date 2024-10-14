import { Component, Input, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  @Input() Heading!: string;
  @Input() Triggering!: boolean;
  @Input() NavigateTo!: string;
  @Input() NavButtonText!: string;

  items!: MenuItem[];
  activeItem: MenuItem | undefined;
  sidebarVisible: boolean = false; // Initialize sidebar visibility
  isDesktop: boolean = true;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-home', routerLink: '/home' },
      { label: 'Register', icon: 'pi pi-user-plus', routerLink: '/register' },
      { label: 'Login', icon: 'pi pi-user', routerLink: '/login' },
      { label: 'Book An Ambulance', icon: 'pi pi-shopping-cart', routerLink: '/book-ambulance' },
      { label: 'Contact Us', icon: 'pi pi-address-book', routerLink: '/contact-us' },
      { label: 'Emergency', icon: 'pi pi-address-book', routerLink: '/emergency' },
    ];

    this.activeItem = this.items[0];
    this.checkScreenSize(); // Check screen size on init
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenSize(); // Check screen size on resize
  }

  checkScreenSize() {
    this.isDesktop = window.innerWidth > 768; // Adjust breakpoint as needed
  }

  onActiveItemChange(event:any) {
    this.activeItem = event;
    if (!this.isDesktop) {
      this.sidebarVisible = false; // Close sidebar on item selection in mobile view
    }
  }
}