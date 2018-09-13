import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IniciarSesiNPage } from '../iniciar-sesi-n/iniciar-sesi-n';
import { InicioPage } from '../inicio/inicio';
import { CrearUsuarioPage } from '../crear-usuario/crear-usuario';
import { EditarUsuarioPage } from '../editar-usuario/editar-usuario';

@Component({
  selector: 'page-configuraci-n',
  templateUrl: 'configuraci-n.html'
})
export class ConfiguraciNPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToIniciarSesiN(params){
    if (!params) params = {};
    this.navCtrl.push(IniciarSesiNPage);
  }goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToCrearUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(CrearUsuarioPage);
  }goToEditarUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(EditarUsuarioPage);
  }
}
