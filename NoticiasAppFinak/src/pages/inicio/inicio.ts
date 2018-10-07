import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {NoticiasService} from '../../services/noticias-service';
import {NewsModel} from '../models/news-model';
import {Observable} from 'rxjs/observable';
import {AngularFireDatabase} from 'angularfire2/database';
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page

  itemsnoticias:NewsModel={
    contenido:'',
    fecha:'',
    imagen:'',
    titulo:'',
    encabezado:''
  }
  noticiasreference$:Observable<NewsModel[]>;
  noticiasobj={} as NewsModel;
  constructor(public navCtrl: NavController,private newss:NoticiasService) {
  
    this.noticiasreference$=this.newss.getNews().valueChanges();
  
  }
  
}
