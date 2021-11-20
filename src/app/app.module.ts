import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './Contador/contador/contador.component';


import { HeroesModule } from './Heroes/heroes.module';
import { ContadorModule } from './Contador/contador.module';

@NgModule({
  declarations: [
    AppComponent,
    // ContadorComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    ContadorModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
