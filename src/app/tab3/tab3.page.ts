import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../servicioApi/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  busqueda = '';
  data: any;
  hospedajes: any = [];
  constructor(public navCtrl: NavController, public service: AuthService, private router: Router) {

    this.service.searchAccommodation('').then((data) => {
      console.log(data);
      this.data = JSON.stringify(data);
      this.hospedajes = JSON.parse(this.data).data;
      console.log(this.hospedajes[1].Images[0].URL);
    });
    console.log();

  }
  ionViewDidEnter(){
    this.search();
  }
  search() {
    console.log(this.busqueda);
    this.service.searchAccommodation(this.busqueda).then((res) => {
      console.log(res);
      this.data = JSON.stringify(res);
      this.hospedajes = JSON.parse(this.data).data;
      console.log(this.hospedajes);
    });
  }
  seleccionarHospedaje(id) {
    this.router.navigateByUrl('seleccionar-hospedaje/' + id);
  }
}
