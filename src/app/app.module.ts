import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterLink, RouterLinkActive } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, IonicModule.forRoot(), IonicModule, AppRoutingModule, RouterLink, RouterLinkActive],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
