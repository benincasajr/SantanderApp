import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { routing } from './app.routes';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title       = 'Chaves de Acesso!';
    urlSite     = environment.urlSite;
    
}
