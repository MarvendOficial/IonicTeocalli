import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/servicioApi/auth.service';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.page.html',
  styleUrls: ['./actualizar-perfil.page.scss'],
})
export class ActualizarPerfilPage implements OnInit {
  private update = {
    username: '',
    name: '',
    father_surname: '',
    mother_surname: '',
    gender: ''
  };
  data: any;
  user: any;
  constructor(public navCtrl: NavController, public service: AuthService, private router: Router,
              private toastController: ToastController) {
    this.data = localStorage.getItem('user');
    this.user = JSON.parse(this.data);
    console.log(this.user.username);
    this.update.name = this.user.name;
    this.update.username = this.user.user_name;
    this.update.father_surname = this.user.father_surname;
    this.update.mother_surname = this.user.mother_surname;
    this.update.gender = this.user.gender;
  }

  ngOnInit() {
  }
  updateData() {
    console.log(this.update);
    this.service.updateData(this.update).then((res) => {
      console.log(res);
      this.presentarError('Se ha actualizado tus datos');
      this.router.navigate(['']);
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
