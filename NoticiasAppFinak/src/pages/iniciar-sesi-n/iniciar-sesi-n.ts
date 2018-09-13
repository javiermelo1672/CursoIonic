import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { CrearUsuarioPage } from '../crear-usuario/crear-usuario';

@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToCrearUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(CrearUsuarioPage);
  }
}
