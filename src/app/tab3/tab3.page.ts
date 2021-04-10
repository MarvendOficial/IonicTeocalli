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
  busqueda = "";
  data: any;
  hospedajes:any =[];
  constructor(public navCtrl: NavController, public service: AuthService, private router: Router) {

    this.service.viewLessses().then((data) => {
      console.log(data);
      this.data = JSON.stringify(data);
      this.hospedajes = JSON.parse(this.data).data;
      console.log(this.hospedajes);
    })
  }
  search() {
    console.log(this.busqueda)
    this.service.searchLeesse(this.busqueda).then((res) => {
      console.log(res);
      this.data = JSON.stringify(res);
      this.hospedajes = JSON.parse(this.data).data;
      console.log(this.hospedajes);
    })
  }
}
