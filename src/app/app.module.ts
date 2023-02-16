import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatItemComponent } from './components/cat-item/cat-item.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MDBBootstrapModule, ButtonsModule, WavesModule, InputsModule, CardsModule, CarouselModule, DropdownModule } from 'angular-bootstrap-md';
import { CatInfoComponent } from './components/cat-info/cat-info.component';
import { HttpConfigInterceptor } from './interceptors/http-config.interceptor';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoryComponent } from './components/category/category.component';



@NgModule({
  declarations: [
    AppComponent,
    CatItemComponent,
    HomeComponent,
    CatInfoComponent,
    NavbarComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    ButtonsModule,
    WavesModule,
    CardsModule,
    InputsModule,
    CarouselModule,
    DropdownModule.forRoot()
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
