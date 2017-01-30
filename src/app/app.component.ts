import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { routing } from './app.routes';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title       = 'Chaves de Acesso!';
    urlSite     = environment.urlSite;

    items: FirebaseListObservable<any[]>;

    constructor(public af: AngularFire) {
        //this.items = af.database.list('/grocery-items');
        //console.table(this.items);
    }
    
}
