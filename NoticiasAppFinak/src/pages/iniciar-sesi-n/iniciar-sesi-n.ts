import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { CrearUsuarioPage } from '../crear-usuario/crear-usuario';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireAuth} from "angularfire2/auth";
import {TabsControllerPage} from '../tabs-controller/tabs-controller';
import {UserAuthModel} from '../models/user-auth-model';
import {LoadingController}  from 'ionic-angular';
import {AlertController} from 'ionic-angular';

@Component({
  selector: 'page-iniciar-sesi-n',
  templateUrl: 'iniciar-sesi-n.html'
})
export class IniciarSesiNPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  userobject={} as UserAuthModel;
  constructor(public alertCtrl:AlertController,public navCtrl: NavController,private loadingCtrl:LoadingController, private authFirebase:AngularFireAuth) {
  }
  
  loginFunction(userobject:UserAuthModel)
  {
   
     let alertadeerror=this.alertCtrl.create({
       title:'¡Ups algo ha salido mal!',
       subTitle:'Revisa tus credenciales',
       buttons:['Aceptar']

     });
     const cargando=this.loadingCtrl.create({
       content:"Estamos Inciando sesión"
     });

     cargando.present().then(()=>this.authFirebase.auth.signInWithEmailAndPassword(userobject.email,userobject.password).then(res =>this.navCtrl.push(TabsControllerPage)&&cargando.dismiss()).catch(error=>alertadeerror.present()&&cargando.dismiss())).catch(error=>cargando.dismiss());
      
      
     
    
    

  }
  goToInicio(params){
    if (!params) params = {};
    this.navCtrl.push(InicioPage);
  }goToCrearUsuario(params){
    if (!params) params = {};
    this.navCtrl.push(CrearUsuarioPage);
  }
}
