import { CanActivateFn, CanLoad, Router } from '@angular/router';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export const AuthenticationGaurds: CanActivateFn = (route: any, state: any) => {
  const router = inject(Router);
  const messageService = inject(MessageService);
  const token = localStorage.getItem('Access_token') ?? false
  if (typeof(token)=='boolean') {
    router.navigate(['/login']);
    messageService.add({
      severity: 'error',
      summary: 'Unauthorised Access',
      detail: 'Kindly Login / Register to Access',
    });
    return false;
  } else {
      return true;
    
  }

  return false
};
