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

  public postData: CambioDeContraseña = {
    username: ''
  };
  idRecuperacion;
  contra;
  codigo;
  constructor(
    private toastController: ToastController,
    private rs: RegistrarService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  CambioDeContra() {
    this.rs.CambiarContra(this.postData).subscribe(res => {
      console.log(res);
      const res2 = JSON.stringify(res);
      this.idRecuperacion = JSON.parse(res2).data.id;
      this.presentarError("Se ha enviado un mensaje a tu correo");
      // this.router.navigateByUrl('');
    });
  }
  contraNueva() {

    console.log(this.codigo, this.idRecuperacion, this.contra);
    this.rs.nuevaContra(this.idRecuperacion, this.codigo, this.contra).then((res) => {
      console.log(res);
      this.presentarError('se ha cambiado de contraseña');
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
