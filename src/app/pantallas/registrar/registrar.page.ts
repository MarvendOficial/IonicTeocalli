import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MenuController, ToastController } from '@ionic/angular';
import { RegistrarService } from 'src/app/servicioApi/registrar.service';
import { requestRegistrar } from '../../interfaces/registrar'


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.page.html',
  styleUrls: ['./registrar.page.scss'],
})
export class RegistrarPage implements OnInit {

  private registrar : requestRegistrar = {
    user_role_id: 2,
    name: '',
    father_surname: '',
    mother_surname: '',
    username: '',
    Password: ''
  }

  constructor(
    private rs:RegistrarService, 
    private router: Router, 
    private toastController: ToastController,
    private menuControl: MenuController
    ) {
   }

   crearCuenta(registrar: requestRegistrar){
     const postData: requestRegistrar =
     {
      "user_role_id": registrar.user_role_id,
      "name": registrar.name,
      "father_surname": registrar.father_surname,
      "mother_surname": registrar.mother_surname,
      "username": registrar.username,
      "Password": registrar.Password
     }
    this.rs.crearCuenta(postData).subscribe(res=>{
      this.presentarError("¡Registro Exitoso!");
      this.router.navigateByUrl('/login');
    });
   }

   async presentarError(msg:string){
     const toast = await this.toastController.create({
       message: msg,
       duration: 2000,
       position: 'bottom',
       color: 'naTeo',
       cssClass: 'toast',
    
     });
     toast.present();
   }

  ngOnInit() {
    this.menuControl.enable(false);
  }

}
