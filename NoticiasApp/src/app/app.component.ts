import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InicioPage } from '../pages/inicio/inicio';
import { BSquedaPage } from '../pages/b-squeda/b-squeda';
import { ConfiguraciNPage } from '../pages/configuraci-n/configuraci-n';
import { CrearCuentaPage } from '../pages/crear-cuenta/crear-cuenta';


import { IniciarSesiNPage } from '../pages/iniciar-sesi-n/iniciar-sesi-n';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = IniciarSesiNPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }goToBSqueda(params){
    if (!params) params = {};
    this.navCtrl.setRoot(BSquedaPage);
  }goToConfiguraciN(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ConfiguraciNPage);
  }goToIniciarSesiN(params){
    if (!params) params = {};
    this.navCtrl.setRoot(IniciarSesiNPage);
  }goToCrearCuenta(params){
    if (!params) params = {};
    this.navCtrl.setRoot(CrearCuentaPage);
  }
}
