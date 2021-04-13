import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { RegistrarService } from '../servicioApi/registrar.service';

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

  }

  login() {
    console.log(this.postData)
    this.rs.iniciarSesion(this.postData).subscribe(res => {
      localStorage.setItem("isUserLoggedIn",'true');
      this.localStorageData(res);
      this.presentarError("¡Has iniciado sesion con Exito!");
      this.router.navigateByUrl('/tabs/tab1');

    }, err => { alert('verifique que los datos sean correctos'); });
  }

  localStorageData(res) {
    const userData = res.data.user;
    const token = res.data.access_token;
    console.log(token);
    localStorage.setItem('token',token);
    localStorage.setItem('user', JSON.stringify(userData));
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
