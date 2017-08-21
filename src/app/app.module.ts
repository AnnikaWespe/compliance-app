import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyAppComponent} from './app.component';

import {HomePageComponent} from '../pages/home/home.component';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {QuestionScreenComponent} from '../pages/questionScreen/questionScreen.component';
import {UserService} from '../services/user.service';
import {InfoScreenComponent} from '../pages/questionScreen/infoScreen/infoScreen.component';
import {EndScreenComponent} from '../pages/questionScreen/endScreen/endScreen.component';
import {AppInsightsModule} from '../app-insights/appinsights.module';
import {DisclaimerComponent} from '../pages/disclaimer/disclaimer.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {createTranslateLoader} from '../services/CreateTranslateLoader';
import {Http, HttpModule} from '@angular/http';
import {DecisionTreeDataService} from '../services/decisionTreeData.service';
import {GlossaryService} from '../services/glossary.service';
import {FormComponent} from '../pages/questionScreen/confirmSendInquiry/form/form.component';
import {ConfirmSendInquiryComponent} from '../pages/questionScreen/confirmSendInquiry/confirmSendInquiry.component';
import {SaveProcessService} from '../services/saveProcess.service';
import {SavedProcessesComponent} from "../pages/savedProcesses/savedProcesses.component";

@NgModule({
  declarations: [
    MyAppComponent,
    HomePageComponent,
    QuestionScreenComponent,
    ConfirmSendInquiryComponent,
    InfoScreenComponent,
    EndScreenComponent,
    DisclaimerComponent,
    FormComponent,
    SavedProcessesComponent
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
    ConfirmSendInquiryComponent,
    InfoScreenComponent,
    EndScreenComponent,
    DisclaimerComponent,
    FormComponent,
    SavedProcessesComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    DecisionTreeDataService,
    GlossaryService,
    SaveProcessService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
