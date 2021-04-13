import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/servicioApi/auth.service';

@Component({
  selector: 'app-historial-de-pagos',
  templateUrl: './historial-de-pagos.page.html',
  styleUrls: ['./historial-de-pagos.page.scss'],
})
export class HistorialDePagosPage implements OnInit {
  array;
  data: any = [];
  constructor(private servie: AuthService) {
    this.servie.listPayments().then((data) => {
      console.log(data);
      this.array = JSON.stringify(data);
      this.data = JSON.parse(this.array).data;
      console.log(this.data);
    });
  }

  ngOnInit() {
  }

}
