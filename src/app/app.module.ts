import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from '../interceptor/auth.interceptor';
import {FilePath} from '@ionic-native/file-path/ngx';
import {FileChooser} from '@ionic-native/file-chooser/ngx';
import {Base64} from '@ionic-native/base64/ngx';
import {DatePipe} from '@angular/common';
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    Base64,
    FilePath,
    FileChooser,
    DatePipe
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
