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
import { HomeComponent } from './pages/home/home.component';
import {SidebarModule} from "primeng/sidebar";
import {CardModule} from "primeng/card";
import {AccordionModule} from "primeng/accordion";
import { ProductsHeaderComponent } from './pages/home/components/products-header/products-header.component';
import {MenuModule} from "primeng/menu";
import { FiltersComponent } from './pages/home/components/filters/filters.component';
import { ProductBoxComponent } from './pages/home/components/product-box/product-box.component';
import { CartComponent } from './pages/cart/cart.component';
import {TableModule} from "primeng/table";
import {CartService} from "./services/cart.service";
import {ToastModule} from "primeng/toast";
import {RippleModule} from "primeng/ripple";
import {MessageService} from "primeng/api";
import {StoreService} from "./services/store.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {DividerModule} from "primeng/divider";
import {PaginatorModule} from "primeng/paginator";
import { ToastMessageComponent } from './components/toast-message/toast-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProductsHeaderComponent,
    FiltersComponent,
    ProductBoxComponent,
    CartComponent,
    ToastMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToolbarModule,
    ButtonModule,
    BadgeModule,
    OverlayPanelModule,
    SidebarModule,
    CardModule,
    AccordionModule,
    MenuModule,
    TableModule,
    ToastModule,
    RippleModule,
    HttpClientModule,
    DividerModule,
    PaginatorModule
  ],
  providers: [CartService, MessageService, StoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
