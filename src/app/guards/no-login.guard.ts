import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoLoginGuard implements CanActivate {
  constructor(private router:Router){}
  async canActivate(){
      const isUserLoggedIn = await localStorage.getItem("isUserLoggedIn");
    if(!isUserLoggedIn){
      return true
    }else{
      this.router.navigateByUrl("/tabs/tab1");
    }
  }
  
}
