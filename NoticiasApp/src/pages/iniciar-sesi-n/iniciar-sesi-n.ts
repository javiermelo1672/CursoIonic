import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CrearCuentaPage } from '../crear-cuenta/crear-cuenta';
import { InicioPage } from '../inicio/inicio';

@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {

  constructor(public navCtrl: NavController) {
  }
  goToCrearCuenta(params){
    if (!params) params = {};
    this.navCtrl.push(CrearCuentaPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.setRoot(InicioPage);
  }
}
