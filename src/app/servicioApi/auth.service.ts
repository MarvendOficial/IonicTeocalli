import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthConstants } from '../config/auth-constants';
import { requestRegistrar } from '../interfaces/registrar';
import { requestUpdateData } from '../interfaces/updateData';
import { RegistrarService } from './registrar.service';
import { StorageService } from './storage.service';


const usersAll = environment.Data;
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private registrar = {
    username: 'pedrouriel_@hotmail.com',
    name: 'pedro421',
    father_surname: 'cortez',
    mother_surname: 'cortez',
    gender: 'male'
  };
  private img = {
    file: '',
    filename: ''
  };
  id: number;
  constructor(
    private httpService: RegistrarService,
    private storageService: StorageService,
    private router: Router,
    private http: HttpClient
  ) {
    const datos = localStorage.getItem('user');
    const array = JSON.parse(datos);
    this.id = array.ID;
  }

  // login(postDate: any): Observable<any> {
  //   return this.httpService.post('/api/v1/auth', postDate);
  // }

  // singup(postDate: any): Observable<any> {
  //   return this.httpService.post('singup', postDate);
  // }

  logout() {
    this.storageService.removeItem(AuthConstants.AUTH).then(res => {
      this.router.navigate(['']);
    });
  }

  getData() {
    return new Promise((resolve) => {
      this.http.get('https://afternoon-reaches-14063.herokuapp.com/api/v1/clients/' + this.id).
        subscribe((data) => {
          resolve(data);
        }, err => {
          console.log(err);
        });
      console.log('authServices');
    });
  }

  updateData(datos) {
    return new Promise((resolve) => {
      this.http.put('https://afternoon-reaches-14063.herokuapp.com/api/v1/clients/' + this.id, datos)
        .subscribe((data) => { resolve(data); }, err => { console.log(err); });
      console.log('authServices');
    });
  }
  setDocuments(name: string, file: string) {
    this.img.file = file;
    this.img.filename = name;
    return new Promise((resolve) => {
      this.http.post(`https://afternoon-reaches-14063.herokuapp.com/api/v1/clients/${this.id}/documents`, this.img)
        .subscribe((data) => { resolve(data); },
          error => { console.log(error) });
    });
  }
  updateDocument(id, name: string, file: string) {
    this.img.file = file;
    this.img.filename = name;
    return new Promise((resolve) => {
      this.http.put('https://afternoon-reaches-14063.herokuapp.com/api/v1/clients/documents/' + id, this.img)
        .subscribe((data) => { resolve(data); },
          error => { console.log(error) });
    });
  }
  setProfileImage(name: string, file: string) {
    this.img.file = file;
    this.img.filename = name;
    return new Promise((resolve) => {
      this.http.patch('https://afternoon-reaches-14063.herokuapp.com/api/v1/clients/' + this.id, this.img).subscribe((data) => {
        resolve(data);
      }, error => { console.log(error) });
    });

  }

  searchAccommodation(nombre) {
    return new Promise((resolve) => {
      this.http.get('https://afternoon-reaches-14063.herokuapp.com/api/v1/accommodations/?city=' + nombre).subscribe((data) => {
        resolve(data);
      }, err => console.log(err));
    });
  }
  searchAccommodationId(id) {
    return new Promise((resolve) => {
      this.http.get('https://afternoon-reaches-14063.herokuapp.com/api/v1/accommodations/' + id).subscribe((data) => {
        resolve(data);
      }, err => console.log(err));
    });
  }
  searchLesseId(id) {
    return new Promise((resolve) => {
      this.http.get('https://afternoon-reaches-14063.herokuapp.com/api/v1/lessee/' + id).subscribe((data) => {
        resolve(data);
      }, err => console.log(err));
    });
  }
  listPayments() {
    return new Promise((resolve) => {
      this.http.get('https://afternoon-reaches-14063.herokuapp.com/api/v1/payments/history/' + this.id).subscribe((data) => {
        resolve(data);
      }, err => console.log(err));
    });
  }
  createSolicitud(idAcc) {
    return new Promise((resolve) => {
      this.http.post(`https://afternoon-reaches-14063.herokuapp.com/api/v1/accommodations/requests/${idAcc}/${this.id}`, null)
        .subscribe((data) => {
          resolve(data);
        }, err => console.log(err));
    });
  }
  payment(idAcc, precio) {
    const obj = {
      amount: precio
    };
    return new Promise((resolve) => {
      this.http.post(`https://afternoon-reaches-14063.herokuapp.com/api/v1/payments/${this.id}/${idAcc}`, obj).subscribe((data) => {
        resolve(data);
      }, err => console.log(err));
    });
  }


}
