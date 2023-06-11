import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { VerificarComponent } from './components/verificar/verificar.component';
import { InicioComponent } from './components/inicio/inicio.component';



@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    RecuperarComponent,
    VerificarComponent,
    InicioComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
