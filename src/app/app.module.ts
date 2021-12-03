import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './menu/menu.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ListadoGenericoComponent } from './utilidades/listado-generico/listado-generico.component';
import { ListadoLibrosComponent } from './libros/listado-libros/listado-libros.component';
import { RatingComponent } from './utilidades/rating/rating.component';
import { FormularioLoginComponent } from './utilidades/formulario-login/formulario-login.component';
import { NosotrosComponent } from './utilidades/nosotros/nosotros.component';
import { AutorizadoComponent } from './seguridad/autorizado/autorizado.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LandingpageComponent,
    ListadoGenericoComponent,
    ListadoLibrosComponent,
    RatingComponent,
    FormularioLoginComponent,
    NosotrosComponent,
    AutorizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
