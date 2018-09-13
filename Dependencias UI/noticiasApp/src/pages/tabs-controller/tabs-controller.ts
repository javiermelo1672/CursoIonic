import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InicioPage } from '../inicio/inicio';
import { CategoriasPage } from '../categorias/categorias';
import { ConfiguraciNPage } from '../configuraci-n/configuraci-n';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = InicioPage;
  tab2Root: any = CategoriasPage;
  tab3Root: any = ConfiguraciNPage;
  constructor(public navCtrl: NavController) {
  }
  
}
