import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyAppComponent} from './app.component';

import {HomePageComponent} from '../pages/home/home.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {QuestionScreenComponent} from '../pages/questionScreen/questionScreen.component';
import {UserService} from '../services/user.service';
import {ConfirmSendEmailComponent} from '../pages/questionScreen/confirmSendEmail/confirmSendEmail.component';
import {InfoScreenComponent} from '../pages/questionScreen/infoScreen/infoScreen.component';
import {EndScreenComponent} from '../pages/questionScreen/endScreen/endScreen.component';
import {AppInsightsModule} from '../app-insights/appinsights.module';

@NgModule({
  declarations: [
    MyAppComponent,
    HomePageComponent,
    QuestionScreenComponent,
    ConfirmSendEmailComponent,
    InfoScreenComponent,
    EndScreenComponent
  ],
  imports: [
    AppInsightsModule,
    BrowserModule,
    IonicModule.forRoot(MyAppComponent)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyAppComponent,
    HomePageComponent,
    QuestionScreenComponent,
    ConfirmSendEmailComponent,
    InfoScreenComponent,
    EndScreenComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
