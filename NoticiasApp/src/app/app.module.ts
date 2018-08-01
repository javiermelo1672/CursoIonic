import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { BSquedaPage } from '../pages/b-squeda/b-squeda';
import { ConfiguraciNPage } from '../pages/configuraci-n/configuraci-n';
import { ConfiguraciNAdminPage } from '../pages/configuraci-nadmin/configuraci-nadmin';
import { IniciarSesiNPage } from '../pages/iniciar-sesi-n/iniciar-sesi-n';
import { CrearCuentaPage } from '../pages/crear-cuenta/crear-cuenta';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    BSquedaPage,
    ConfiguraciNPage,
    ConfiguraciNAdminPage,
    IniciarSesiNPage,
    CrearCuentaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    BSquedaPage,
    ConfiguraciNPage,
    ConfiguraciNAdminPage,
    IniciarSesiNPage,
    CrearCuentaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}