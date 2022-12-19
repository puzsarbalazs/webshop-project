import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import {ToolbarModule} from "primeng/toolbar";
import {ButtonModule} from "primeng/button";
import {BadgeModule} from "primeng/badge";
import {OverlayPanelModule} from "primeng/overlaypanel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
      BrowserAnimationsModule,
        ToolbarModule,
        ButtonModule,
        BadgeModule,
        OverlayPanelModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
