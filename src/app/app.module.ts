import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MastheadComponent } from './masthead/masthead.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { CalltoactionComponent } from './calltoaction/calltoaction.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
//Importacion del modulo
import { HttpClientModule } from  '@angular/common/http';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    MastheadComponent,
    AboutComponent,
    ServicesComponent,
    PortfolioComponent,
    CalltoactionComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [ //Registro de módulo importado
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CanvasJSAngularChartsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
