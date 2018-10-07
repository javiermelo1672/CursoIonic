import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import {NewsModel} from '../pages/models/news-model';

@Injectable()
export class NoticiasService {
private newsreference=this.db.list<NewsModel>('/BasedeDatos/Noticias');

    constructor(private db:AngularFireDatabase){}

     createNoticia(itemdenoticias){ 
        this.newsreference.push(itemdenoticias);
       }

    getNews(){
       return this.db.list<NewsModel>('/BasedeDatos/Noticias');
      
    }
}
