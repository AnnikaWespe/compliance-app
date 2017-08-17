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
import {IntroductionComponent} from '../pages/home/introduction/introduction.component';
import {DisclaimerComponent} from '../pages/disclaimer/disclaimer.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {createTranslateLoader} from '../services/CreateTranslateLoader';
import {Http, HttpModule} from '@angular/http';
import {DecisionTreeDataService} from '../services/decisionTreeData.service';
import {GlossaryService} from "../services/glossary.service";

@NgModule({
  declarations: [
    MyAppComponent,
    HomePageComponent,
    QuestionScreenComponent,
    ConfirmSendEmailComponent,
    InfoScreenComponent,
    EndScreenComponent,
    IntroductionComponent,
    DisclaimerComponent
  ],
  imports: [
    AppInsightsModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      },
    }),
    HttpModule,
    IonicModule.forRoot(MyAppComponent, {
      backButtonText: '',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyAppComponent,
    HomePageComponent,
    QuestionScreenComponent,
    ConfirmSendEmailComponent,
    InfoScreenComponent,
    EndScreenComponent,
    IntroductionComponent,
    DisclaimerComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    DecisionTreeDataService,
    GlossaryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
