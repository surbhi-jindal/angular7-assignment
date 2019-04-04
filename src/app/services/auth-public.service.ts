import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthPublicService implements CanActivate{

  constructor(private router: Router) { }

  canActivate(): boolean{
    
    if(localStorage.getItem('id') == null)
    return true;
    
    else{
      this.router.navigate(['/user/mypage']);
      return false;
    }

  }
}
