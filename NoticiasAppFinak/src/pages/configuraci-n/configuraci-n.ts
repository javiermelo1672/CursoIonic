import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IniciarSesiNPage } from '../iniciar-sesi-n/iniciar-sesi-n';
import { InicioPage } from '../inicio/inicio';
import { CrearUsuarioPage } from '../crear-usuario/crear-usuario';
import { EditarUsuarioPage } from '../editar-usuario/editar-usuario';
import {UserService} from '../../services/user-service';
import {Observable} from 'rxjs/observable';
import {UserDbModel} from '../models/user_db_model';
import { AngularFireAuth } from "angularfire2/auth";
@Component({
  selector: 'page-configuraci-n',
  templateUrl: 'configuraci-n.html'
})
export class ConfiguraciNPage {
  itemsusuario:UserDbModel={
    nombre:'',
    edad:'',
    sexo:'',
    foto:'',
    tipo:''
  }
  id:string;
  displayname:string;

  userreference$:Observable<UserDbModel[]>;
  userobj={} as UserDbModel;
  constructor(public navCtrl: NavController, private users:UserService, private auths:AngularFireAuth) {
    auths.authState.subscribe(user => {
      if (!user) {
        this.displayname = null;        
        return;
      }
      
      
          
    });
    this.id=this.auths.auth.currentUser.uid;
    console.log(this.id);
    this.userreference$=this.users.getSpecificUser(this.id).valueChanges();
   
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
