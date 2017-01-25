import { BrowserModule }  from '@angular/platform-browser';
import { Component, NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { APP_BASE_HREF }    from '@angular/common';

import { MaterialModule } from '@angular/material';
import { AppComponent }   from './app.component';

import 'hammerjs';
import { MenuComponent } from './layout/menu/menu.component';
import { ConfigComponent } from './admin/config/config.component';
import { IndexComponent } from './index/index.component';

import { environment } from '../environments/environment';
import { routing } from './app.routes';
import { ListarChavesComponent } from './listar-chaves/listar-chaves.component';
import { AlterarChavesComponent } from './alterar-chaves/alterar-chaves.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, ConfigComponent, IndexComponent, ListarChavesComponent, AlterarChavesComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    routing 
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.pastaSite}],
  bootstrap: [AppComponent]
})
export class AppModule { }
