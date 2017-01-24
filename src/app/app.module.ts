import { BrowserModule }  from '@angular/platform-browser';
import { Component, NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { APP_BASE_HREF }    from '@angular/common';

import { MaterialModule } from '@angular/material';
import { AppComponent }   from './app.component';

import 'hammerjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot()
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/my/app'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
