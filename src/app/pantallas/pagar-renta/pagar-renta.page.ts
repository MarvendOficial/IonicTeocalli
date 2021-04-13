import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicioApi/auth.service';

@Component({
  selector: 'app-pagar-renta',
  templateUrl: './pagar-renta.page.html',
  styleUrls: ['./pagar-renta.page.scss'],
})
export class PagarRentaPage implements OnInit {
  data;
  userAccommodations: any = [];
  constructor(private service: AuthService, private router: Router) {
    this.service.getData().then((data) => {
      console.log(data);
      this.data = JSON.stringify(data);
      this.userAccommodations = JSON.parse(this.data).data;
      console.log(this.userAccommodations.Accommodations);
    });
  }

  ngOnInit() {
  }
  pagar(id) {
    this.router.navigateByUrl('/tabs/formulario-pagar-renta/' + id);
  }

}
