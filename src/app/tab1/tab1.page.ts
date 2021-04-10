import { Component } from '@angular/core';
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
    { id: null, exist: false },
    { id: null, exist: false },
    { id: null, exist: false },
    { id: null, exist: false },
  ];
  id: any;

  constructor(public navCtrl: NavController, public service: AuthService, public fileChooser: FileChooser, public filePath: FilePath, public base64: Base64) {
    this.data = localStorage.getItem('user');
    this.user = JSON.parse(this.data);
    console.log(this.user.ProfileImage);
  }
  ngOnInit() {
    this.id = setInterval(() => {
      this.searchDocument();
      this.service.getData().then((res) => {
        const res1 = JSON.stringify(res);
        const res2 = JSON.parse(res1).data;
        this.user = res2;
        console.log();
        localStorage.setItem('user', JSON.stringify(res2));
      });
    }, 1500);

  }

  setProfileImg() {
    this.fileChooser.open().then((fileutl) => {
      this.filePath.resolveNativePath(fileutl).then((path) => {
        this.base64.encodeFile(path).then((res) => {
          this.service.setProfileImage(Date.now().toString(), res.substring(34).toString()).then((res) => {
            const res1 = JSON.stringify(res);
            const res2 = JSON.parse(res1);
            this.data = localStorage.getItem("user");
            this.user = JSON.parse(this.data);
            this.user.ProfileImage = res2.data.url;
            localStorage.setItem('user', JSON.stringify(this.user));
            alert('Success');
          });
        })
      })
    })
  }

  subirDoc(nombreDoc: string) {
    this.fileChooser.open().then((fileutl) => {
      this.filePath.resolveNativePath(fileutl).then((path) => {
        this.base64.encodeFile(path).then((res) => {
          this.service.setDocuments(nombreDoc, res.substring(34)).then((res) => {
            alert("Success");
          },error => alert(JSON.stringify(error)));
        })
      })
    })
  }
  updateDoc(nombreDoc: string, id: number) {
    this.fileChooser.open().then((fileutl) => {
      this.filePath.resolveNativePath(fileutl).then((path) => {
        this.base64.encodeFile(path).then((res) => {
          this.service.updateDocument(id, nombreDoc, res.substring(34)).then((res) => {
            alert('Success');
          },error => alert(JSON.stringify(error)));
        })
      })
    })
  }
  searchDocument() {
    const arra = localStorage.getItem('user');
    var datos = JSON.parse(arra);
    for (let index = 0; index < datos.Documents.length; index++) {
      if ("ine" === datos.Documents[index].Name) {
        this.documents[0].exist = true;
        this.documents[0].id = datos.Documents[index].ID;
      } else if ("comprobantEstudio" === datos.Documents[index].Name) {
        this.documents[1].exist = true;
        this.documents[1].id = datos.Documents[index].ID;
      } else if ("domicilioAval" === datos.Documents[index].Name) {
        this.documents[2].exist = true;
        this.documents[2].id = datos.Documents[index].ID;
      } else if ("ineAval" === datos.Documents[index].Name) {
        this.documents[3].exist = true;
        this.documents[3].id = datos.Documents[index].ID;
      }
    }
  }

}
