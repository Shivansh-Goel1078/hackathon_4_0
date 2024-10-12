import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api/public_api';

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

  constructor(private router: Router) {}

  navigation() {
    this.router.navigate([`${this.NavigateTo}`]);
  }

  items!: MenuItem[];

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Register', icon: 'pi pi-list', routerLink: '/register' },
      { label: 'Login', icon: 'pi pi-shopping-cart', routerLink: '/login' },
      {
        label: 'Contact Us',
        icon: 'pi pi-address-book',
        routerLink: '/contact-us',
      },
    ];

    this.activeItem = this.items[0];
  }

  onActiveItemChange(event:any) {
    this.activeItem = event;
  }
}