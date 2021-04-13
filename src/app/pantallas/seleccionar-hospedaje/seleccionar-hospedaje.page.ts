import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/servicioApi/auth.service';

@Component({
  selector: 'app-seleccionar-hospedaje',
  templateUrl: './seleccionar-hospedaje.page.html',
  styleUrls: ['./seleccionar-hospedaje.page.scss'],
})
export class SeleccionarHospedajePage implements OnInit {
  data;
  hospedajes: any = [];
  hospe;
  img;
  constructor(private route: ActivatedRoute, private service: AuthService,
              private router: Router, private toastController: ToastController) {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.service.searchAccommodationId(this.route.snapshot.paramMap.get('id')).then((data) => {
      console.log(data);
      this.data = JSON.stringify(data);
      this.hospedajes = JSON.parse(this.data).data;
      this.img = this.hospedajes.Images[0];
      console.log(this.img);
    });

  }

  ngOnInit() {
  }
  seleccionar(id) {
    this.router.navigateByUrl('contactar-dueno/' + id);
  }
  solicitud(id) {
    this.service.createSolicitud(id).then((res) => {
      console.log(res);
    });
    this.presentarError('Se ha enviado su solicitud');
    this.router.navigateByUrl('tabs/tab3');
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
