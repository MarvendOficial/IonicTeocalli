import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController, ToastController } from '@ionic/angular';
import { RegistrarService } from 'src/app/servicioApi/registrar.service';
import { requestRegistrar } from '../../interfaces/registrar';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  registrar = {
    user_role_id: 2,
    name: '',
    father_surname: '',
    mother_surname: '',
    username: '',
    Password: '',
    gender: ''
  };

  constructor(
    private rs: RegistrarService,
    private router: Router,
    private toastController: ToastController,
    private menuControl: MenuController
  ) {
  }

  crearCuenta() {
    console.log(this.registrar);
    this.rs.crearCuenta(this.registrar).then((res) => {
      this.presentarError('Favor de verificar su correo e ingresar la claves');
      const res1 = JSON.stringify(res);
      const res2 = JSON.parse(res1).data;
      console.log(res2);
      this.router.navigateByUrl('verificacion/' + res2.id);
    }, error => alert('cuenta existente o contraseña no valida'));
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

  ngOnInit() {
    this.menuControl.enable(false);
  }

}
