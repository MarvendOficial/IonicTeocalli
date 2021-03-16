import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CambioDeContraseña } from 'src/app/interfaces/cambio-de-contraseña';
import { RegistrarService } from 'src/app/servicioApi/registrar.service';

@Component({
  selector: 'app-recuperar-cuenta',
  templateUrl: './recuperar-cuenta.page.html',
  styleUrls: ['./recuperar-cuenta.page.scss'],
})
export class RecuperarCuentaPage implements OnInit {

  public postData = {
    username: ''
  };

  constructor(
    private toastController: ToastController,
    private rs: RegistrarService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  CambioDeContra() {
    const postData: CambioDeContraseña =
    {
      "username": this.postData.username
    }
    this.rs.CambiarContra(postData).subscribe(res => {
      this.presentarError("Se ha enviado un mensaje a tu correo");
      this.router.navigateByUrl('');
    });
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
