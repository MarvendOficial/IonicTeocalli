import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthConstants } from '../config/auth-constants';
import { RegistrarService } from './registrar.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpService: RegistrarService,
    private storageService: StorageService,
    private router: Router
  ) { }

  // login(postDate: any): Observable<any> {
  //   return this.httpService.post('/api/v1/auth', postDate);
  // }

  // singup(postDate: any): Observable<any> {
  //   return this.httpService.post('singup', postDate);
  // }

  logout(){
    this.storageService.removeItem(AuthConstants.AUTH).then(res =>{
      this.router.navigate(['']);
    })
  }
}
