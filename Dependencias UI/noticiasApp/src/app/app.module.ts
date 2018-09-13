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


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

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
    CocinaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
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
    CocinaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}