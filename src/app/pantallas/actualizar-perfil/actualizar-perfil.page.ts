import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from 'src/app/servicioApi/auth.service';

@Component({
  selector: 'app-actualizar-perfil',
  templateUrl: './actualizar-perfil.page.html',
  styleUrls: ['./actualizar-perfil.page.scss'],
})
export class ActualizarPerfilPage implements OnInit {
  private update = {
    username: '',
    name:'',
    father_surname: '',
    mother_surname: '',
    gender: ''
  }
  data:any;
  user:any;
  constructor(public navCtrl: NavController, public service: AuthService,private router: Router) {
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
  updateData(){
    this.service.updateData(this.update).then((res)=>{
      console.log(res);
      this.router.navigateByUrl('');
      // const array = JSON.stringify(res);
      // const userData = JSON.parse(array);
      // localStorage.setItem('user', JSON.stringify(userData.data));
    })
  }
}
