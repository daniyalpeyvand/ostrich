import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { ContactUsComponent } from './Components/contact-us/contact-us.component';
import { GalleryComponent } from './Components/gallery/gallery.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { AddProductComponent } from './Components/add-product/add-product.component';
import { ShowComponent } from './Components/show/show.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { TestLogManagerComponent } from './Components/test-log-manager/test-log-manager.component';
import { DisplayLogsComponent } from './Components/display-logs/display-logs.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path : "home",
    component : HomeComponent,
  }
  ,
  {
    path : 'gallery',
    component : GalleryComponent,
  }
  ,
  {
    path : 'aboutUs',
    component :AboutUsComponent,
  }
  ,

  {
    path : 'contactUs',
    component : ContactUsComponent,
  }
  ,
  {
    path : 'products',
    component : ProductsComponent,
  }
  ,
{
  path : 'login',
  component : LoginComponent,
}
,
{
  path : 'register',
  component : RegisterComponent,
}
,
{
  path : 'addProduct',
  component : AddProductComponent,
}
,
{
path : 'show',
component : ShowComponent,
}
,
{
  path : 'testLogManager',
  component : TestLogManagerComponent
}
,
{
  path : 'displayLogs',
  component : DisplayLogsComponent
},
{
  path : '**',
  component : PageNotFoundComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
