import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {UserDbModel} from '../pages/models/user_db_model';

@Injectable()
export class UserService {
private userreference=this.db.list<UserDbModel>('/BasedeDatos/Usuarios');
private usuarioespecifico;
    constructor(private db:AngularFireDatabase){}

     createUsuario(sitio,id){ 
        this.db.database.ref('/BasedeDatos/Usuarios/'+id).set(sitio);
       }

    getSpecificUser(id){
       this.usuarioespecifico=this.db.list<UserDbModel>('/BasedeDatos/Usuarios',ref=>ref.orderByKey().equalTo(id));
       return this.usuarioespecifico;
    }
}
