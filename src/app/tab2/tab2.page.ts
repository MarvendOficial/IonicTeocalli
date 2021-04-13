import { Component } from '@angular/core';
import { AuthService } from '../servicioApi/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  data;
  user: any = [];
  Accommodations:any=[];
  constructor(private service: AuthService) {
    this.service.getData().then((data) => {
      console.log(data);
      this.data = JSON.stringify(data);
      this.user = JSON.parse(this.data).data;
      this.Accommodations = this.user.Accommodations;
      console.log(this.user.Accommodations);
    });
  }
  ionViewDidEnter() {
    this.service.getData().then((data) => {
      console.log(data);
      this.data = JSON.stringify(data);
      this.user = JSON.parse(this.data).data;
      console.log(this.user.Accommodations);
    });
  }

}
