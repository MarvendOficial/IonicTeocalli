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



  
  crearCuenta(cuentaNueva: requestRegistrar) {
    return this.httpService.post(direccionURlCrearCuenta, cuentaNueva);
  }

  iniciarSesion(iniciarSesion: Login) {
    return this.httpService.post(direccionURlIniciarSesion, iniciarSesion);
  }
  Validar(token: requestRegistrar) {
    return this.httpService.patch(direccionURlCrearCuenta, token);
  }
  CambiarContra(username: CambioDeContraseña) {
    return this.httpService.post(direccionURlCambiarC, username);
  }



  // post(serviceName: string, data: any) {
  //   const headers = new HttpHeaders();
  //   const options = { headers: headers, withCredinitials: false };

  //   const url = environment.apiURl + serviceName;

  //   return this.httpService.post(url, JSON.stringify(data), options);
  // }

}
