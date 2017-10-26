import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {PrincipalMenuPage} from '../pages/principal-menu/principal-menu'
import { ParallaxDirective } from '../directives/parallax/parallax';
import {DuchaControlPage} from '../pages/ducha-control/ducha-control'
import {EcoModePage} from '../pages/eco-mode/eco-mode'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalMenuPage,
    ParallaxDirective,
    DuchaControlPage,
    EcoModePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalMenuPage,
    DuchaControlPage,
    EcoModePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
