import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './Components/products/products.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {RoutingModule}  from './moudels/routing/routing.module';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ShowComponent } from './Components/show/show.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { TestLogManagerComponent } from './Components/test-log-manager/test-log-manager.component';
import { DisplayLogsComponent } from './Components/display-logs/display-logs.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomeComponent,
    NavbarComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactUsComponent,
    RegisterComponent,
    LoginComponent,
    AddProductComponent,
    ShowComponent,
    PageNotFoundComponent,
    TestLogManagerComponent,
    DisplayLogsComponent,

  
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    FormsModule,
    RoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
