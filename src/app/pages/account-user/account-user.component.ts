import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-account-user',
  templateUrl: './account-user.component.html',
  styleUrls: ['./account-user.component.css']
})
export class AccountUserComponent {
  userProfile: any;
  showProfileCard: boolean = false;
  fullName!: any 
  titleCaseFullName!:any

  constructor(private notificationService: NotificationService,private router: Router, private messageService: MessageService) {}
   titleCase(str:any) {
    return str.toLowerCase()
      .split(' ')
      .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  ngOnInit() {
    const userInfo = JSON.parse(localStorage.getItem('Token')!)
    this.fullName = JSON.parse(localStorage.getItem('fullName')!)
    this.titleCaseFullName = this.titleCase(this.fullName);
    console.log(JSON.parse(localStorage.getItem('Token')!),this.fullName)
    
  }

  

  logout() {
    
    localStorage.clear();
    this.router.navigate(['/login']);
    this.messageService.add({severity:'success', summary: 'Logged Out', detail: 'You have been successfully logged out.'});
  }

  subscribeToNotifications() {
    this.notificationService.subscribeToNotifications();
  }
}
