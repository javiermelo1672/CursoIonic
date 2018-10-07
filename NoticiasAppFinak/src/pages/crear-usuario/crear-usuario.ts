import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UserService} from '../../services/user-service';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {UserDbModel} from "../models/user_db_model";
import {UserAuthModel} from "../models/user-auth-model";
import {AlertController} from "ionic-angular";
import {TabsControllerPage} from "../tabs-controller/tabs-controller";
@Component({
  selector: 'page-crear-usuario',
  templateUrl: 'crear-usuario.html'
})
export class CrearUsuarioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  ids:string;
  userauth={} as UserAuthModel;
  userdb={} as UserDbModel;
  constructor(private alertCtrl:AlertController,public navCtrl: NavController, private uservice:UserService,private authc:AngularFireAuth,private db:AngularFireDatabase) {
  
  }
  async CrearUsuario(userauth:UserAuthModel,userdb:UserDbModel)
 
  {
    try {

      const result=await this.authc.auth.createUserWithEmailAndPassword(userauth.email,userauth.password);
      this.ids=this.authc.auth.currentUser.uid;
      console.log(result);
      userdb.tipo='Lector';
      let sitio={
        nombre:userdb.nombre,
        edad:userdb.edad,
        sexo:userdb.sexo,
        foto:userdb.foto,
        tipo:userdb.tipo,
      }
      this.uservice.createUsuario(sitio,this.ids);
      let alertadebienvenida=this.alertCtrl.create({
        title:'¡Correcto!',
        subTitle:'Estas a punto de vivir la experiencia Noticias App',
        buttons:['Aceptar']
 
      });
      alertadebienvenida.present();
      this.navCtrl.push(TabsControllerPage);

    }
    catch{
      let alertadeerror=this.alertCtrl.create({
        title:'¡Ups algo ha salido mal!',
        subTitle:'Revisa los Campos',
        buttons:['Aceptar']
 
      });
      alertadeerror.present();
    }
  }
  
}
