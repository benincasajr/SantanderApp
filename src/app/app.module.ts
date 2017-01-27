import { BrowserModule }  from '@angular/platform-browser';
import { Component, NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { APP_BASE_HREF }    from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { AppComponent }   from './app.component';

import 'hammerjs';

import { LoginComponent } from './admin/login.component';
import { ConfigComponent } from './admin/config/config.component';
import { MenuComponent } from './layout/menu/menu.component';

import { ListarComponent } from './token/listar/listar.component';
import { TokenComponent } from './token/token/token.component';


import { environment } from '../environments/environment';
import { routing } from './app.routes';

@NgModule({
  declarations: [AppComponent, LoginComponent, MenuComponent, ListarComponent, ConfigComponent, ListarComponent, TokenComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    routing
  ],
  providers: [{provide: APP_BASE_HREF, useValue: environment.pastaSite}],
  bootstrap: [AppComponent]
})
export class AppModule { }
