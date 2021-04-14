import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/servicioApi/auth.service';

@Component({
  selector: 'app-historial-de-pagos',
  templateUrl: './historial-de-pagos.page.html',
  styleUrls: ['./historial-de-pagos.page.scss'],
})
export class HistorialDePagosPage implements OnInit {
  array;
  data: any = [];
  constructor(private servie: AuthService, public alertController: AlertController, private datePipe: DatePipe) {
    this.servie.listPayments().then((data) => {
      console.log(data);
      this.array = JSON.stringify(data);
      this.data = JSON.parse(this.array).data;
      console.log(this.data);
    });
  }

  ngOnInit() {
  }

  // verInfo(id) {
  //   for (let d of this.data) {
  //     if (id === d.ID) {
  //       alert('Price: ' + d.Quantity);
  //     }
  //   }
  // }
  async verInfo(id) {
    for (const d of this.data) {
      if (id === d.ID) {
        const fecha = this.datePipe.transform(d.CreatedAt, 'dd MMMM yyyy HH:mm');
        const alert = await this.alertController.create({
          message: 'Fecha: ' + fecha + '<br>Monto: ' + d.Quantity + '<br>Usuario: ' + d.User.name + ' ' + d.User.father_surname + ' '
            + d.User.mother_surname
            + '<br>Alojamiento: ' + d.Accommodation.Name,
          buttons: ['OK']
        });

        await alert.present();
      }
    }

  }

}
