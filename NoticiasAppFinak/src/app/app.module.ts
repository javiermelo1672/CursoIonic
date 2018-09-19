import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { CategoriasPage } from '../pages/categorias/categorias';
import { ConfiguraciNPage } from '../pages/configuraci-n/configuraci-n';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { IniciarSesiNPage } from '../pages/iniciar-sesi-n/iniciar-sesi-n';
import { CrearUsuarioPage } from '../pages/crear-usuario/crear-usuario';
import { EditarUsuarioPage } from '../pages/editar-usuario/editar-usuario';
import { CocinaPage } from '../pages/cocina/cocina';
import {HomePage} from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//Aquí se importa modulos de Firebase
import {FIREBASE_CONFIG} from './app.firebase.config';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireStorageModule} from 'angularfire2/storage';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import {AngularFireAuthModule} from 'angularfire2/auth';
@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    CategoriasPage,
    ConfiguraciNPage,
    TabsControllerPage,
    IniciarSesiNPage,
    CrearUsuarioPage,
    EditarUsuarioPage,
    CocinaPage,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule
  
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    CategoriasPage,
    ConfiguraciNPage,
    TabsControllerPage,
    IniciarSesiNPage,
    CrearUsuarioPage,
    EditarUsuarioPage,
    CocinaPage,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}