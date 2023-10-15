// auth.guard.ts
import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';
import { EBookGuardServiceService } from './e-book-guard-service.service';

@Injectable({
  providedIn: 'root',
})
export class EBookGPageGueard implements CanActivate {
  constructor(
    private eBookser: EBookGuardServiceService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    if (this.eBookser.eBookAcessState()) {
      return true;
    } else {
      this.router.navigate(['investments', 'e-books']);
      return false;
    }
  }
}
