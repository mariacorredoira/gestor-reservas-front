import {inject, Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent, HttpHandlerFn
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth/auth.service';

export function httpInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  const authService = inject(AuthService);
  const token = authService.getToken();
  console.log(token);
  // No añadir token en login o register
  if (req.url.includes('/users/login') || req.url.includes('/users/register')) {
    return next(req);
  }
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(req);
}
