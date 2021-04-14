import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Base64 } from '@ionic-native/base64/ngx';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { NavController } from '@ionic/angular';
import { AuthService } from '../servicioApi/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  data: any;
  user: any;
  documents = [
    { id: null, exist: false, img: null },
    { id: null, exist: false, img: null },
    { id: null, exist: false, img: null },
    { id: null, exist: false, img: null },
  ];
  id: any;

  constructor(public navCtrl: NavController, public service: AuthService, public fileChooser: FileChooser,
    public filePath: FilePath, public base64: Base64, private router: Router) {
    this.data = localStorage.getItem('user');
    this.user = JSON.parse(this.data);
    console.log(this.user.ProfileImage);
  }
  ionViewDidEnter() {
    setInterval(() => {
      this.service.getData().then((res) => {
        const res1 = JSON.stringify(res);
        const res2 = JSON.parse(res1).data;
        this.user = res2;
        console.log(this.user);
        localStorage.setItem('user', JSON.stringify(res2));
      });
      this.searchDocument();
    },3000)

  }
  setProfileImg() {
    this.fileChooser.open().then((fileutl) => {
      this.filePath.resolveNativePath(fileutl).then((path) => {
        this.base64.encodeFile(path).then((res) => {
          this.service.setProfileImage(Date.now().toString(), res.substring(34).toString()).then((res) => {
            const res1 = JSON.stringify(res);
            const res2 = JSON.parse(res1);
            this.data = localStorage.getItem('user');
            this.user = JSON.parse(this.data);
            this.user.ProfileImage = res2.data.url;
            localStorage.setItem('user', JSON.stringify(this.user));
            alert('Success');
          });
        });
      });
    });
  }

  subirDoc(nombreDoc: string) {
    this.fileChooser.open().then((fileutl) => {
      this.filePath.resolveNativePath(fileutl).then((path) => {
        this.base64.encodeFile(path).then((res) => {
          this.service.setDocuments(Date.now() + nombreDoc, res.substring(34)).then((res) => {
            alert('Success');
          }, error => alert('error al subir un documento'));
        });
      });
    });
  }

  updateDoc(nombreDoc: string, id: number) {
    this.fileChooser.open().then((fileutl) => {
      this.filePath.resolveNativePath(fileutl).then((path) => {
        this.base64.encodeFile(path).then((res) => {
          this.service.updateDocument(id, Date.now() + nombreDoc, res.substring(34)).then((res) => {
            alert('Success');
          }, error => alert('error al actualizar un documento'));
        });
      });
    });
  }
  searchDocument() {
    this.documents = [
      { id: null, exist: false, img : null},
      { id: null, exist: false, img: null },
      { id: null, exist: false, img: null },
      { id: null, exist: false, img: null },
    ];
    const arra = localStorage.getItem('user');
    const datos = JSON.parse(arra).Documents;
    for (let d of datos) {
      if ('ine' === d.Name.substring(13)) {
        console.log(d.Name);
        this.documents[0].exist = true;
        this.documents[0].id = d.ID;
        this.documents[0].img = d.URL;
      } else if ('comprobantEstudio' === d.Name.substring(13)) {
        console.log(d.Name);
        this.documents[1].exist = true;
        this.documents[1].id = d.ID;
        this.documents[1].img = d.URL;
      } else if ('domicilioAval' === d.Name.substring(13)) {
        console.log(d.Name);
        this.documents[2].exist = true;
        this.documents[2].id = d.ID;
        this.documents[2].img = d.URL;
      } else if ('ineAval' === d.Name.substring(13)) {
        console.log(d.Name);
        this.documents[3].exist = true;
        this.documents[3].id = d.ID;
        this.documents[3].img = d.URL;
      }
    }
  }

  logOut() {
    localStorage.clear();
    this.router.navigateByUrl('');
  }
}
