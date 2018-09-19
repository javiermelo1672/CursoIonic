import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { CrearUsuarioPage } from '../crear-usuario/crear-usuario';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireAuth} from "angularfire2/auth";
import {TabsControllerPage} from '../tabs-controller/tabs-controller';
import {UserAuthModel} from '../models/user-auth-model';
import {LoadingController}  from 'ionic-angular';
@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  userobject={} as UserAuthModel;
  constructor(public navCtrl: NavController,private loadinCtrl:LoadingController, private authFirebase:AngularFireAuth) {
  }
  
  loginFunction(userobject:UserAuthModel)
  {
    try{
      this.authFirebase.auth.signInWithEmailAndPassword(userobject.email,userobject.password);
      this.navCtrl.push(InicioPage);
      console.log("Has iniciado sesión");
    }
    catch(e)
    {
      console.log("Ups ha habido un error");
    }
    

  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToCrearUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(CrearUsuarioPage);
  }
}
