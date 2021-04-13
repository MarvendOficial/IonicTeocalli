import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { requestRegistrar } from '../interfaces/registrar';
import { environment } from 'src/environments/environment';
import { Login } from '../interfaces/login';
import { CambioDeContraseña } from '../interfaces/cambio-de-contraseña';

const direccionURlCrearCuenta = environment.direccionCrearCuenta;
const direccionURlIniciarSesion = environment.direccionIniciarSesion;
//const direccionURlValidar = environment.direccionValidar;
const direccionURlCambiarC = environment.direccionCC;

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private httpService: HttpClient) { }





  crearCuenta(cuentaNueva) {
    return new Promise((resolve) => {
      this.httpService.post('https://afternoon-reaches-14063.herokuapp.com/api/v1/auth/account', cuentaNueva)
        .subscribe((data) => { resolve(data); }, err => { console.log(err); });
    });
  }
  verificarCuenta(id, code) {
    const obj = {
      code
    };
    return new Promise((resolve) => {
      this.httpService.patch('https://afternoon-reaches-14063.herokuapp.com/api/v1/auth/account/' + id, obj)
        .subscribe((data) => { resolve(data); }, err => { console.log(err); });
    });
  }
  iniciarSesion(iniciarSesion: Login) {
    return this.httpService.post(direccionURlIniciarSesion, iniciarSesion);
  }
  Validar(token: requestRegistrar) {
    return this.httpService.patch(direccionURlCrearCuenta, token);
  }
  CambiarContra(username) {
    return this.httpService.post(direccionURlCambiarC, username);
  }

  nuevaContra(idUser, codigo, contra) {
    const obj = {
      new_password: contra,
      code: codigo
    };
    return new Promise((resolve) => {
      this.httpService.patch('https://afternoon-reaches-14063.herokuapp.com/api/v1/auth/' + idUser, obj)
        .subscribe((data) => { resolve(data); }, err => { console.log(err); });
    });
  }



  // post(serviceName: string, data: any) {
  //   const headers = new HttpHeaders();
  //   const options = { headers: headers, withCredinitials: false };

  //   const url = environment.apiURl + serviceName;

  //   return this.httpService.post(url, JSON.stringify(data), options);
  // }

}
