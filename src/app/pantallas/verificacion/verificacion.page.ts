import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { RegistrarService } from 'src/app/servicioApi/registrar.service';

@Component({
  selector: 'app-verificacion',
  templateUrl: './verificacion.page.html',
  styleUrls: ['./verificacion.page.scss'],
})
export class VerificacionPage implements OnInit {
  id;
  code;
  constructor(private route: ActivatedRoute, private service: RegistrarService, private router: Router,
              private toastController:ToastController) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

  verificarCuenta() {
    console.log(this.code);
    this.service.verificarCuenta(this.id, this.code).then((res) => {
      console.log(res);
      this.presentarError('Se ha verificado su cuenta puede iniciar sesion');
      this.router.navigateByUrl('login');
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
