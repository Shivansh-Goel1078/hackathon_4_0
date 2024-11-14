import { CanActivateFn, CanLoad, Router } from '@angular/router';
import { inject } from '@angular/core';
import { MessageService } from 'primeng/api';

export const AuthenticationGaurds: CanActivateFn = (route: any, state: any) => {
  const router = inject(Router);
  const messageService = inject(MessageService);
  const token = localStorage.getItem('Token') ?? false
  const emergency = localStorage.getItem('Token') ?? false
  if (typeof(token)=='boolean' && typeof(token)=="boolean") {
    return true;
  } else{
    router.navigate(['account'])
    return false;
  }
};

export const AuthenticationGaurdsAccount: CanActivateFn = (route: any, state: any) => {
  const router = inject(Router);
  const messageService = inject(MessageService);
  const token = localStorage.getItem('Token') ?? false
  const emergency = localStorage.getItem('Token') ?? false
  if (typeof(token)=='boolean' && typeof(token)=="boolean") {
    router.navigate(['login'])
    return false;
  } else{
    return true;
  }
};
