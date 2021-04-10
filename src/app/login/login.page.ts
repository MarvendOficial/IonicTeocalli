import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/core';
import { MenuController, ToastController } from '@ionic/angular';
import { AuthConstants } from '../config/auth-constants';
import { Login } from '../interfaces/login';
import { AuthService } from '../servicioApi/auth.service';
import { RegistrarService } from '../servicioApi/registrar.service';
import { StorageService } from '../servicioApi/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public postData = {
    username: '',
    Password: ''
  };

  constructor(
    private toastController: ToastController, private rs: RegistrarService, private router: Router, private menuControl: MenuController) {
    this.menuControl.enable(false);
  }

  ngOnInit() {
    this.menuControl.enable(false);

  }

  // validInputs() {
  //   let username = this.postData.username.trim();
  //   let password = this.postData.Password.trim();

  //   return (this.postData.username &&
  //     this.postData.Password &&
  //     username.length > 0 &&
  //     password.length > 0)
  // }

  // loginAction() {
  //   if (this.validInputs()) {
  //     this.authService.login(this.postData).subscribe((res: any)=>{
  //       if (res.userData) {
  //         this.storageService.store(AuthConstants.AUTH, res.userData);
  //         this.router.navigate(['/tabs/tab1']);
  //       }else{
  //         console.log('Incorecto el usuario o contrseña');
  //       }
  //     })
  //   }else {
  //     console.log('Por favor verifica tu informacion')
  //   }
  // }

  login(request: Login) {
    const postData: Login =
    {
      "username": this.postData.username,
      "Password": this.postData.Password
    }

    this.rs.iniciarSesion(postData).subscribe(res => {
      this.localStorageData(res);
      this.presentarError("¡Has iniciado sesion con Exito!");
      this.router.navigateByUrl('/tabs/tab1');

    }, err => {alert(err) });
  }

  localStorageData(res) {
    const userData = res.data.user;
    const token = res.data.access_token;
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token );
    console.log(localStorage.getItem("user"));
  }
  async presentarError(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
      position: 'bottom',
      color: 'naTeo',
      cssClass: 'toast',

    });
    toast.present();
  }


}
