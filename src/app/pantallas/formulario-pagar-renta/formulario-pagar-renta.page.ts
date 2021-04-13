import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/servicioApi/auth.service';

@Component({
  selector: 'app-formulario-pagar-renta',
  templateUrl: './formulario-pagar-renta.page.html',
  styleUrls: ['./formulario-pagar-renta.page.scss'],
})
export class FormularioPagarRentaPage implements OnInit {
  data;
  id;
  price;
  constructor(private route: ActivatedRoute, private service: AuthService, private router: Router,
              private toastController: ToastController) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.service.searchAccommodationId(this.id).then((data) => {
      console.log(data);
      this.data = JSON.stringify(data);
      this.price = JSON.parse(this.data).data.Price;
    });
  }

  ngOnInit() {
  }
  pagar() {
    console.log(this.id, this.price);
    this.service.payment(this.id, this.price).then((res) => {
      console.log(res);
    });
    this.presentarError('Se ha realizado con exito su pago');
    this.router.navigateByUrl('tabs/tab2');
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
