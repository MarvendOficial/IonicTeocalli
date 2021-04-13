import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/servicioApi/auth.service';

@Component({
  selector: 'app-contactar-dueno',
  templateUrl: './contactar-dueno.page.html',
  styleUrls: ['./contactar-dueno.page.scss'],
})
export class ContactarDuenoPage implements OnInit {
  data;
  leesse: any = [];
  img: string;
  nombeCompleto: string;
  constructor(private route: ActivatedRoute, private service: AuthService) {
    this.service.searchLesseId(this.route.snapshot.paramMap.get('id')).then((data) => {
      console.log(data);
      this.data = JSON.stringify(data);
      this.leesse = JSON.parse(this.data).data;
      this.img = this.leesse.User.ProfileImage;
      this.nombeCompleto = this.leesse.User.name + ' ' + this.leesse.User.father_surname + ' ' + this.leesse.User.mother_surname;
      console.log(this.leesse.User.name);
    });
  }

  ngOnInit() {
  }

}
